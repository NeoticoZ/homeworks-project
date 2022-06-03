import { NextPage } from "next";
import { useState } from "react";
import { ModalAddNotification } from "../components/ModalAddNotification";
import { ModalAddTask } from "../components/ModalAddTask";
import { setupAPIClient } from "../services/api";
import { Container, Wrapper } from "../styles/pages/manage";
import { withSSRAuth } from "../utils/withSSRAuth";

const Manage: NextPage = () => {
  const [taskModal, setTaskModalOpen] = useState(false);
  const [notificationModal, setNotificationModalOpen] = useState(false);

  const toggleTaskModal = () => {
    setTaskModalOpen(!taskModal);
  };

  const toggleNotificationModal = () => {
    setNotificationModalOpen(!notificationModal);
  };

  return (
    <Container>
      <Wrapper>
        <h2 className="title">Selecione uma ação</h2>

        <div className="buttons">
          <div className="buttons button-wrapper">
            <button
              onClick={toggleTaskModal}
              className="button-wrapper__button"
            >
              Adicionar tarefa
            </button>
          </div>

          <span className="buttons__span">ou</span>

          <div className="buttons button-wrapper">
            <button
              onClick={toggleNotificationModal}
              className="button-wrapper__button"
            >
              Adicionar aviso
            </button>
          </div>
        </div>
      </Wrapper>

      <ModalAddTask isOpen={taskModal} setIsOpen={toggleTaskModal} />

      <ModalAddNotification
        isOpen={notificationModal}
        setIsOpen={toggleNotificationModal}
      />
    </Container>
  );
};

export const getServerSideProps = withSSRAuth(async (ctx: any) => {
  const apiClient = setupAPIClient(ctx);
  const user = await apiClient.get("/user");

  if (!user.data.admin) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
});

export default Manage;
