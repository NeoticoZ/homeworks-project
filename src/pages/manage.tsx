import { NextPage } from "next";
import { Header } from "../components/Header";
import { Container, Wrapper } from "../styles/pages/manage";

const Manage: NextPage = () => {
  return (
    <>
      <Header />

      <Container>
        <Wrapper>
          <h2 className="title">Selecione uma ação</h2>

          <div className="buttons">
            <div className="buttons button-wrapper">
              <button className="button-wrapper__button">
                Adicionar tarefa
              </button>
            </div>

            <span className="buttons__span">ou</span>

            <div className="buttons button-wrapper">
              <button className="button-wrapper__button">
                Adicionar aviso
              </button>
            </div>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default Manage;
