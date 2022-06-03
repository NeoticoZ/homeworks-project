import { NextPage } from "next";
import Router from "next/router";
import { useState } from "react";
import { ModalAcceptTask } from "../components/ModalAcceptTask";
import { NotificationButton } from "../components/NotificationButton";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import {
  CheckboxIcon,
  CheckedIcon,
  Container,
  OptionsIcon,
  Tab,
  Tasks,
  UncheckedIcon,
  Wrapper,
} from "../styles/pages/dashboard";
import { withSSRAuth } from "../utils/withSSRAuth";

interface ITask {
  id: string;
  name: string;
  status: string;
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
}

interface ITasks {
  tasks: ITask[];
}

const Dashboard: NextPage<ITasks> = ({ tasks }) => {
  const [taskModal, setTaskModalOpen] = useState(false);
  const [taskId, setTaskId] = useState("");
  const [taskPage, setTaskPage] = useState("open");

  const toggleTaskModal = () => {
    setTaskModalOpen(!taskModal);
  };

  const handleTaskClick = async (id: string) => {
    setTaskId(id);

    if (taskPage === "open") {
      toggleTaskModal();
    } else if (taskPage === "doing") {
      await api.patch("/task", {
        taskId: id,
        status: "done",
      });

      Router.reload();
    }
  };

  const getActualDate = () => {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day < 10 && "0"}${day}/${month < 10 && "0"}${month}/${year}`;
  };

  const actualDate = getActualDate();

  return (
    <Container>
      <Tab>
        <button
          onClick={() => setTaskPage("open")}
          className={taskPage === "open" ? "active" : ""}
        >
          Tarefas
        </button>
        <button
          onClick={() => setTaskPage("doing")}
          className={taskPage === "doing" ? "active" : ""}
        >
          Em andamento
        </button>
        <button
          onClick={() => setTaskPage("done")}
          className={taskPage === "done" ? "active" : ""}
        >
          Concluídas
        </button>
      </Tab>

      <Wrapper>
        <h2>Tarefas dia {actualDate}</h2>

        <Tasks>
          {tasks.map(
            (task) =>
              task.status === taskPage && (
                <li
                  key={task.id}
                  className={`task ${
                    task.status === "done" ? "task--done" : ""
                  }`}
                >
                  <UncheckedIcon className="task__checkbox" type="checkbox" />

                  <p className="task__description">{task.name}</p>

                  <span className="task__user-name">
                    {task.assignedTo === "all" ? "" : task.assignedTo}
                  </span>

                  <button
                    onClick={() => handleTaskClick(task.id)}
                    className="task__option"
                  >
                    {task.status === "open" && <OptionsIcon />}
                    {task.status === "doing" && <CheckboxIcon />}
                    {task.status === "done" && <CheckedIcon />}
                  </button>
                </li>
              )
          )}
        </Tasks>
      </Wrapper>

      <NotificationButton />

      <ModalAcceptTask
        isOpen={taskModal}
        setIsOpen={toggleTaskModal}
        taskId={taskId}
      />
    </Container>
  );
};

export const getServerSideProps = withSSRAuth(async (ctx: any) => {
  const apiClient = setupAPIClient(ctx);
  const tasks = await apiClient.get("/tasks");

  const date = new Date();
  const actualDate = date.getDate();

  const tasksFiltered = tasks.data.filter((task: ITask) => {
    const taskDate = new Date(task.createdAt).getDate();

    return taskDate === actualDate;
  });

  return {
    props: {
      tasks: tasksFiltered,
    },
  };
});

export default Dashboard;
