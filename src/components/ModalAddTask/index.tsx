import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/apiClient";
import { Modal } from "../Modal";
import { Container, FormTitle } from "./styles";

interface IModalAddTaskProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const ModalAddTask = ({ isOpen, setIsOpen }: IModalAddTaskProps) => {
  const [taskName, setTaskName] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await api.get("/users");

      const filteredUsers = response.data.filter(
        (originalUser: IUser) => originalUser.id !== user.id
      );

      setUsers(filteredUsers);
    })();
  }, [user]);

  const handleCreateTask = async (e: FormEvent) => {
    e.preventDefault();

    await api
      .post("/task", {
        name: taskName,
        status: "open",
        assignedTo: selectedUser,
      })
      .then(() => {
        toast.success("Tarefa criada com sucesso");
      })
      .catch((err) => {
        toast.error(err.message);
      });

    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <FormTitle>Adicionar tarefa</FormTitle>

      <Container onSubmit={handleCreateTask}>
        <div className="input-wrapper">
          <label className="input-wrapper__label" htmlFor="title">
            Tarefa <span>*</span>
          </label>

          <input
            className="input-wrapper__input input-wrapper__input--title"
            type="text"
            name="task"
            id="task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Descrição da tarefa..."
            required
          />
        </div>

        <div className="select-wrapper">
          <label className="select-wrapper__label" htmlFor="users">
            Designar tarefa:
          </label>

          <select
            className="select-wrapper__select"
            name="users"
            id="users"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value="all">Todos</option>

            {users.map((user) => (
              <option key={user.id} value={user.name}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div className="buttons-wrapper">
          <button
            className="buttons-wrapper__button buttons-wrapper__button--cancel"
            type="button"
            onClick={setIsOpen}
          >
            Cancelar
          </button>

          <button
            className="buttons-wrapper__button buttons-wrapper__button--add"
            type="submit"
          >
            Adicionar
          </button>
        </div>
      </Container>
    </Modal>
  );
};
