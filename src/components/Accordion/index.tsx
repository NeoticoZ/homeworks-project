import { ReactNode, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon, Container } from "./styles";

interface IAccordionProps {
  title: string;
  children: ReactNode;
}

export const Accordion = ({ title, children }: IAccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container className={isActive ? "accordion--show" : ""}>
      <button
        onClick={() => setIsActive(!isActive)}
        className="accordion__button"
      >
        {title}
        {isActive ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </button>

      <p className="accordion__content">{children}</p>
    </Container>
  );
};
