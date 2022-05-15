import styled from "styled-components";

import { BsThreeDotsVertical } from "react-icons/bs";

export const Container = styled.main`
  max-width: 900px;

  margin: 4rem auto;
`;

export const Tab = styled.div`
  button {
    background: ${({ theme }) => theme.primary};

    padding: 0.8rem 2rem;

    border-right: 1px solid ${({ theme }) => theme.border};
    border-top: 1px solid ${({ theme }) => theme.border};

    &:first-child {
      border-left: 1px solid ${({ theme }) => theme.border};
    }

    &.active {
      background: var(--blue);
      color: var(--white);
    }

    &:hover:not(.active) {
      background: ${({ theme }) => theme.secondary};
    }
  }
`;

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.primary};

  padding: 3rem 4rem;

  border: 1px solid ${({ theme }) => theme.border};
`;

export const Tasks = styled.ul`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .task {
    width: 100%;
    height: 2.5rem;

    display: flex;
    align-items: center;

    padding: 0 1rem;

    border: 1px solid ${({ theme }) => theme.border};

    &__checkbox {
      pointer-events: none;
    }

    &__description {
      margin-left: 0.8rem;
    }

    &__user-name {
      margin-left: auto;
    }

    &__option {
      margin-left: 1rem;

      display: flex;
      align-items: center;
    }

    &:hover {
      background: ${({ theme }) => theme.secondary};
    }
  }
`;

export const OptionsIcon = styled(BsThreeDotsVertical)`
  width: 1.3rem;
  height: 1.3rem;
`;
