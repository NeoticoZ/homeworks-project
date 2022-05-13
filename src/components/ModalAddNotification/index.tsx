import { title } from "process";
import { useState } from "react";
import { Modal } from "../Modal";
import { FormTitle, Container } from "./styles";

interface IModalAddTaskProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const ModalAddNotification = ({
  isOpen,
  setIsOpen,
}: IModalAddTaskProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <FormTitle>Adicionar aviso</FormTitle>

      <Container>
        <div className="input-wrapper">
          <label className="input-wrapper__label" htmlFor="title">
            Título <span>*</span>
          </label>

          <input
            className="input-wrapper__input input-wrapper__input--title"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titulo da aviso..."
            required
          />
        </div>

        <div className="input-wrapper">
          <label className="input-wrapper__label" htmlFor="description">
            Descrição <span>*</span>
          </label>

          <textarea
            placeholder="Descrição da aviso..."
            className="input-wrapper__input"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={8}
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
