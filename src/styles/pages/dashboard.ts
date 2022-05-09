import styled from "styled-components";

import { BsThreeDotsVertical } from "react-icons/bs";

export const Container = styled.main`
  max-width: 900px;

  margin: 4rem auto;
`;

export const Tab = styled.div`
  button {
    background: var(--white);
    color: var(--gray-700);

    padding: 0.8rem 2rem;

    border-right: 1px solid var(--gray-400);
    border-top: 1px solid var(--gray-400);

    &:first-child {
      border-left: 1px solid var(--gray-400);
    }

    &.active {
      background: var(--blue);
      color: white;
    }
  }
`;

export const Wrapper = styled.section`
  background: var(--white);

  padding: 3rem 4rem;

  border: 1px solid var(--gray-400);

  h2 {
    color: var(--gray-700);
  }
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

    border: 1px solid var(--gray-400);

    &__checkbox {
      pointer-events: none;
    }

    &__description,
    &__user-name {
      color: var(--gray-700);
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
  }
`;

export const OptionsIcon = styled(BsThreeDotsVertical)`
  width: 1.3rem;
  height: 1.3rem;

  fill: var(--gray-600);
`;
