import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useTheme } from "styled-components";

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
}

export const Modal = ({ children, isOpen, setIsOpen }: IModalProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const theme: any = useTheme();

  useEffect(() => {
    if (isOpen !== modalIsOpen) {
      setModalIsOpen(isOpen);
    }
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={setIsOpen}
      ariaHideApp={false}
      style={{
        content: {
          width: "auto",
          minWidth: "300px",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: `${theme.primary}`,
          color: "#000000",
          borderRadius: "8px",
          border: "none",
          padding: "2.5rem 2rem",
        },
        overlay: {
          backgroundColor: "#12121460",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};
