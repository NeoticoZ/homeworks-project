import styled from "styled-components";

import { IoMdNotifications } from "react-icons/io";

interface Props {
  notificationsAmount: string;
}

export const Container = styled.button<Props>`
  width: 3.2rem;
  height: 3.2rem;

  background: ${({ theme }) => theme.primary};

  border-radius: 50%;

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);

  position: fixed;
  right: 1rem;
  bottom: 4rem;

  transition: 0.1s;

  &:after {
    content: "${(props) => props.notificationsAmount}";

    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--red);
    color: var(--white);

    width: 0.8rem;
    height: 0.8rem;

    border: 2px solid ${({ theme }) => theme.secondary};
    border-radius: 50%;

    position: absolute;
    top: -0.2rem;
    right: -0.2rem;

    padding: 0.1rem;

    font-size: 0.7rem;
  }

  &:hover {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 768px) {
    right: 4rem;
  }
`;

export const NotificationIcon = styled(IoMdNotifications)`
  width: 2rem;
  height: 2rem;
`;
