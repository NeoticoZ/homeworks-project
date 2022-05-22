import { NextPage } from "next";
import { Header } from "../components/Header";
import { NotificationButton } from "../components/NotificationButton";
import { setupAPIClient } from "../services/api";
import {
  Container,
  OptionsIcon,
  Tab,
  Tasks,
  UncheckedIcon,
  Wrapper,
} from "../styles/pages/dashboard";
import { withSSRAuth } from "../utils/withSSRAuth";

const Dashboard: NextPage = () => {
  return (
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
            <UncheckedIcon className="task__checkbox" type="checkbox" />
            <span className="task__description">Descrição da tarefa</span>
            <span className="task__user-name">Heriks Araujo Dias</span>
            <button className="task__option">
              <OptionsIcon />
            </button>
          </li>

          <li className="task">
            <UncheckedIcon className="task__checkbox" type="checkbox" />
            <span className="task__description">Descrição da tarefa</span>
            <span className="task__user-name">Heriks Araujo Dias</span>
            <button className="task__option">
              <OptionsIcon />
            </button>
          </li>

          <li className="task">
            <UncheckedIcon className="task__checkbox" type="checkbox" />
            <span className="task__description">Descrição da tarefa</span>
            <span className="task__user-name">Heriks Araujo Dias</span>
            <button className="task__option">
              <OptionsIcon />
            </button>
          </li>
        </Tasks>
      </Wrapper>

      <NotificationButton />
    </Container>
  );
};

export const getServerSideProps = withSSRAuth(async (ctx: any) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get("/user");

  console.log(response.data);

  return {
    props: {},
  };
});

export default Dashboard;
