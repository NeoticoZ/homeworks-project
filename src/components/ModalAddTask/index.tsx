import { useState } from "react";
import { Modal } from "../Modal";
import { Container, FormTitle } from "./styles";

interface IModalAddTaskProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const ModalAddTask = ({ isOpen, setIsOpen }: IModalAddTaskProps) => {
  const [task, setTask] = useState("");

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <FormTitle>Adicionar tarefa</FormTitle>

      <Container>
        <div className="input-wrapper">
          <label className="input-wrapper__label" htmlFor="title">
            Tarefa <span>*</span>
          </label>

          <input
            className="input-wrapper__input input-wrapper__input--title"
            type="text"
            name="task"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Descrição da tarefa..."
            required
          />
        </div>

        <div className="buttons-wrapper">
          <button
            className="buttons-wrapper__button buttons-wrapper__button--add"
            type="button"
          >
            Adicionar
          </button>

          <button
            className="buttons-wrapper__button buttons-wrapper__button--cancel"
            type="button"
            onClick={setIsOpen}
          >
            Cancelar
          </button>
        </div>
      </Container>
    </Modal>
  );
};
