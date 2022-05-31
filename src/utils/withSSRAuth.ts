import dayjs from "dayjs";
import { decode } from "jsonwebtoken";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError } from "../services/errors/AuthTokenError";

export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext) => {
    const cookies = parseCookies(ctx);
    const token = cookies["token"];
    const refreshToken = cookies["refreshToken"];

    const refreshTokenDecoded = decode(refreshToken, { json: true })?.exp;

    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshTokenDecoded as number)
    );

    if (!token || refreshTokenExpired) {
      destroyCookie(ctx, "token");
      destroyCookie(ctx, "refreshToken");

      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    try {
      return await fn(ctx);
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, "token");
        destroyCookie(ctx, "refreshToken");

        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }
    }
  };
}
