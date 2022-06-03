import Link from "next/link";
import { NextPage } from "next/types";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { FormWrapper, Container, SpinnerIcon } from "../styles/pages/login";
import { withSSRLogged } from "../utils/withSSRLogged";

const Register: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, setIsLoading, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading();

    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    signUp(userData);
  };
  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <div className="user">
          <label className="user__label" htmlFor="userName">
            Nome
          </label>

          <input
            className="user__input"
            type="text"
            id="userName"
            placeholder="Digite seu nome..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

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
          <span>Cadastrar</span>
          <SpinnerIcon />
        </button>

        <div className="navigation">
          <span className="navigation__text">Já tem uma conta?</span>

          <Link href="/login">
            <a className="navigation__link">Fazer login</a>
          </Link>
        </div>
      </FormWrapper>
    </Container>
  );
};

export const getServerSideProps = withSSRLogged(async (ctx) => {
  return {
    props: {},
  };
});

export default Register;
