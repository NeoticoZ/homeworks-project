import Router from "next/router";
import { api } from "../../services/apiClient";
import { Modal } from "../Modal";
import { CloseIcon, ConfirmIcon, Wrapper } from "./styles";

interface IModalAcceptTaskProps {
  isOpen: boolean;
  setIsOpen(): void;
  taskId: string;
}

export function ModalAcceptTask({
  isOpen,
  setIsOpen,
  taskId,
}: IModalAcceptTaskProps) {
  const handleAcceptTask = async () => {
    await api
      .patch("/task", {
        taskId,
        status: "doing",
      })
      .then((response) => {
        console.log(response);

        setIsOpen();

        Router.reload();
      });
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Wrapper>
        <h2 className="title">Aceitar tarefa</h2>

        <p className="description">
          Tem certeza que deseja aceitar esta tarefa?
        </p>

        <div className="option-buttons">
          <button
            onClick={setIsOpen}
            className="option-buttons__button option-buttons__button--cancel"
          >
            Cancelar
          </button>

          <button onClick={handleAcceptTask} className="option-buttons__button">
            Aceitar <ConfirmIcon />
          </button>
        </div>
      </Wrapper>
    </Modal>
  );
}
