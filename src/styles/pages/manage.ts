import styled from "styled-components";

export const Container = styled.main`
  max-width: 900px;

  margin: 4rem auto;
`;

export const Wrapper = styled.div`
  background: var(--white);

  padding: 3rem 4rem;

  border: 1px solid var(--gray-400);

  .title {
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .button-wrapper {
    width: 15rem;
    height: 10rem;

    &__button {
      width: 100%;
      height: 100%;

      border: 1px solid var(--gray-400);

      transition: all 0.2s;

      &:hover {
        background: rgba(var(--blue-rgb), 0.08);
        color: var(--blue);
        border-color: var(--blue);
      }
    }
  }
`;
