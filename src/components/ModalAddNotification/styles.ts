import styled from "styled-components";

export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.text};

  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin-top: 2rem;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    &__label {
      span {
        color: var(--red);

        font-size: 1rem;
      }
    }

    &__input {
      width: 100%;

      background: ${({ theme }) => theme.secondary};

      border: 1px solid ${({ theme }) => theme.border};
      border-radius: 0.25rem;

      padding: 0.5rem;

      &--title {
        height: 3rem;
      }

      &:focus {
        outline: 2px solid rgba(var(--blue-rgb), 0.4);
        outline-offset: -1px;
      }
    }
  }

  .buttons-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;

    &__button {
      width: 10rem;
      height: 2.5rem;

      border-radius: 0.25rem;

      transition: 0.1s;

      &--add {
        background: var(--blue);
        color: var(--white);
      }

      &--cancel {
        border: 1px solid ${({ theme }) => theme.borderSecondary};
      }

      &:focus {
        outline: 3px solid rgba(var(--blue-rgb), 0.5);
        outline-offset: -1px;
      }

      &:hover {
        filter: opacity(0.8);
      }
    }
  }

  @media (min-width: 500px) {
    width: 50vw;
  }
`;
