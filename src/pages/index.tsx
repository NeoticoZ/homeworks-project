import { NextPage } from "next";
import Link from "next/link";
import { Container, Wrapper } from "../styles/pages/home";

const Home: NextPage = () => {
  return (
    <Container>
      <Wrapper>
        <h1 className="title">Projeto homeworks</h1>

        <p className="paragraph">
          Uma boa organização é essencial para o funcionamento adequado de
          qualquer coisa e pensando nisso, decidi criar esta aplicação, com o
          intuito de te ajudar a gerenciar as tarefas de casa.
        </p>

        <Link href="/login">
          <a className="link">Comece agora</a>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Home;
