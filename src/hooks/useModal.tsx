import { createContext, useContext, useState } from "react";

interface IModalProviderProps {
  children: React.ReactNode;
}

interface IModalContextProps {
  isOpen: boolean;
  toggleModalStatus: () => void;
}

export const ModalContext = createContext({} as IModalContextProps);

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModalStatus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContext.Provider value={{ isOpen, toggleModalStatus }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  return context;
};
