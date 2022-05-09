import Link from "next/link";
import { NextPage } from "next/types";
import { FormWrapper, Container } from "../styles/pages/login";

const Login: NextPage = () => {
  return (
    <Container>
      <FormWrapper>
        <div className="user">
          <label className="user__label" htmlFor="userMail">
            Email
          </label>

          <input
            className="user__input"
            type="email"
            id="userMail"
            placeholder="Digite seu email..."
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
          />
        </div>

        <button className="button">Entrar</button>

        <div className="form-navigation">
          <span className="navigation__text">Ainda não tem conta?</span>

          <Link href="/register">
            <a className="navigation__link">Cadastre-se</a>
          </Link>
        </div>
      </FormWrapper>
    </Container>
  );
};

export default Login;
