import styled from "styled-components";

import { IoMdNotifications } from "react-icons/io";

export const Container = styled.button`
  width: 3.2rem;
  height: 3.2rem;

  background: ${({ theme }) => theme.primary};

  border-radius: 50%;

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);

  position: fixed;
  right: 4rem;
  bottom: 4rem;

  &:after {
    content: "1";

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
`;

export const NotificationIcon = styled(IoMdNotifications)`
  width: 2rem;
  height: 2rem;
`;
