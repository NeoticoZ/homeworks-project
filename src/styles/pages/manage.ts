import styled from "styled-components";

export const Container = styled.main`
  max-width: 900px;

  margin: 4rem 1rem;

  @media (min-width: 900px) {
    margin: 4rem auto;
  }
`;

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.primary};

  padding: 3rem 4rem;

  border: 1px solid ${({ theme }) => theme.border};

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;
    margin-bottom: 1rem;

    &__span {
      display: flex;
      align-items: center;
    }

    @media (min-width: 500px) {
      flex-direction: row;

      & {
        gap: 1.5rem;
      }
    }
  }

  .button-wrapper {
    width: 15rem;
    height: 10rem;

    &__button {
      width: 100%;
      height: 100%;

      border: 1px solid ${({ theme }) => theme.borderSecondary};

      transition: all 0.2s;

      &:hover {
        background: rgba(var(--blue-rgb), 0.08);
        color: var(--blue);
        border-color: var(--blue);
      }
    }
  }
`;
