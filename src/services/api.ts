import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";
import { signOut } from "../hooks/useAuth";
import { AuthTokenError } from "./errors/AuthTokenError";

let isRefreshing = false;
let failedRequestsQueue: any[] = [];

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: "https://powerful-reef-62654.herokuapp.com/",
    headers: {
      Authorization: `Bearer ${cookies["token"]}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: any) => {
      if (error.response.status === 401) {
        if (error.response.data.code === "token.expired") {
          cookies = parseCookies(ctx);

          const { refreshToken } = cookies;
          const originalConfig = error.config;

          if (!isRefreshing) {
            isRefreshing = true;

            api
              .post("/refresh-token", { refresh_token: refreshToken })
              .then((response) => {
                const { token } = response.data;

                setCookie(null, "token", token, {
                  maxAge: 30 * 24 * 60 * 60,
                  path: "/",
                });

                setCookie(null, "refreshToken", refreshToken, {
                  maxAge: 30 * 24 * 60 * 60,
                  path: "/",
                });

                api.defaults.headers.common[
                  "Authorization"
                ] = `Bearer ${token}`;

                failedRequestsQueue.forEach((request) =>
                  request.onSuccess(token)
                );
                failedRequestsQueue = [];
              })
              .catch((err) => {
                failedRequestsQueue.forEach((request) =>
                  request.onFailure(err)
                );
                failedRequestsQueue = [];

                if (typeof window) {
                  signOut();
                }
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers["Authorization"] = `Bearer ${token}`;

                resolve(api(originalConfig));
              },
              onFailure: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        } else {
          if (typeof window === "undefined") {
            signOut();
          }
        }
      }

      return Promise.reject(error);
    }
  );

  return api;
}
