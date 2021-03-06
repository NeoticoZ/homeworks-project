import Link from "next/link";
import { GetServerSideProps, NextPage } from "next/types";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { FormWrapper, Container, SpinnerIcon } from "../styles/pages/login";
import { withSSRLogged } from "../utils/withSSRLogged";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, setIsLoading, signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading();

    e.preventDefault();

    const userData = {
      email,
      password,
    };

    signIn(userData);
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <div className="user">
          <label className="user__label" htmlFor="userMail">
            Email
          </label>

          <input
            className="user__input"
            type="email"
            id="userMail"
            placeholder="Digite seu email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="user">
          <label className="user__label" htmlFor="userPassword">
            Senha
          </label>

          <input
            className="user__input"
            type="password"
            id="userPassword"
            placeholder="Digite sua senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className={`button ${loading ? "button--submitting" : ""}`}
        >
          <span>Entrar</span>
          <SpinnerIcon />
        </button>

        <div className="navigation">
          <span className="navigation__text">Ainda não tem uma conta?</span>

          <Link href="/register">
            <a className="navigation__link">Cadastre-se</a>
          </Link>
        </div>
      </FormWrapper>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = withSSRLogged(
  async (ctx) => {
    return { props: {} };
  }
);

export default Login;
