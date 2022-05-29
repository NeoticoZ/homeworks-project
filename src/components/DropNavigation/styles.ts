import styled from "styled-components";

import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.aside`
  transform: translateX(-40rem);

  z-index: 9999999;

  width: 100%;
  height: 100vh;

  background: ${({ theme }) => theme.primary};

  position: fixed;
  top: 0;
  left: 0;

  transition: transform 0.4s;

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);

  &.show {
    transform: translateX(0);
  }

  @media (min-width: 500px) {
    width: 40%;
  }

  @media (min-width: 900px) {
    width: 30%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  .link {
    color: ${({ theme }) => theme.text};

    font-size: 1.5rem;
    text-decoration: none;

    position: relative;

    transition: 0.2s;

    &:hover {
      color: var(--blue);

      &:after {
        background: var(--blue);
      }
    }
  }

  .close-button {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  }

  .logout-button {
    position: absolute;
    bottom: 6rem;
    font-size: 1.25rem;

    color: var(--red);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: none;

  z-index: 1;

  background: rgba(0, 0, 0, 0.5);

  &.show {
    display: block;
  }
`;

export const HamburgerIcon = styled(AiOutlineClose)`
  width: 1.8rem;
  height: 1.8rem;

  fill: ${({ theme }) => theme.text};
`;
