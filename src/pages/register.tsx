import Link from "next/link";
import { NextPage } from "next/types";
import { FormWrapper, Container } from "../styles/pages/login";

const Register: NextPage = () => {
  return (
    <Container>
      <FormWrapper>
        <div className="user">
          <label className="user__label" htmlFor="userName">
            Nome
          </label>

          <input
            className="user__input"
            type="text"
            id="userName"
            placeholder="Digite seu nome..."
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

        <div className="navigation">
          <span className="navigation__text">Já tem uma tem conta?</span>

          <Link href="/login">
            <a className="navigation__link">Fazer login</a>
          </Link>
        </div>
      </FormWrapper>
    </Container>
  );
};

export default Register;
