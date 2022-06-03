import { NextPage } from "next";
import Link from "next/link";
import Router from "next/router";
import { Container, Wrapper } from "../styles/pages/home";
import { withSSRLogged } from "../utils/withSSRLogged";

const Home: NextPage = () => {
  return (
    <Container>
      <Wrapper>
        <h1 className="title">Projeto homeworks</h1>

        <p className="paragraph">
          Esta aplicação foi desenvolvida com o intuito de te ajudar no
          gerenciamento de casa, quando estiver fora. Para isso, você poderá
          criar tarefas e acompanhar o desenvolvimento delas.
        </p>

        <Link href="/login">
          <a className="link">Comece agora</a>
        </Link>
      </Wrapper>
    </Container>
  );
};

export const getServerSideProps = withSSRLogged(async (ctx) => {
  return {
    props: {},
  };
});

export default Home;
