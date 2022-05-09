import { NextPage } from "next";
import { Header } from "../components/Header";
import {
  Container,
  OptionsIcon,
  Tab,
  Tasks,
  Wrapper,
} from "../styles/pages/dashboard";

const Dashboard: NextPage = () => {
  return (
    <>
      <Header />

      <Container>
        <Tab>
          <button className="active">Tarefas</button>
          <button>Em andamento</button>
          <button>Concluídas</button>
        </Tab>

        <Wrapper>
          <h2>Tarefas dia 07/05/2022</h2>

          <Tasks>
            <li className="task">
              <input className="task__checkbox" type="checkbox" />
              <span className="task__description">Descrição da tarefa</span>
              <span className="task__user-name">Heriks Araujo Dias</span>
              <button className="task__option">
                <OptionsIcon />
              </button>
            </li>

            <li className="task">
              <input className="task__checkbox" type="checkbox" />
              <span className="task__description">Descrição da tarefa</span>
              <span className="task__user-name">Heriks Araujo Dias</span>
              <button className="task__option">
                <OptionsIcon />
              </button>
            </li>

            <li className="task">
              <input className="task__checkbox" type="checkbox" />
              <span className="task__description">Descrição da tarefa</span>
              <span className="task__user-name">Heriks Araujo Dias</span>
              <button className="task__option">
                <OptionsIcon />
              </button>
            </li>
          </Tasks>
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
