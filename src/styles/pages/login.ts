import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.form`
  max-width: 450px;
  width: 100%;

  background: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  padding: 3rem;
  margin: 0 1rem;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  border-radius: 4px;

  .user {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    &__label {
      color: var(--gray-700);
      font-size: 0.925rem;
    }

    &__input {
      height: 2.8rem;

      background: var(--white);
      color: var(--gray-700);

      border: 1px solid var(--gray-400);
      border-radius: 4px;

      padding-left: 0.8rem;

      &:focus {
        outline: 2px solid rgba(var(--blue-rgb), 0.5);
        outline-offset: -1px;
      }
    }
  }

  .button {
    height: 2.8rem;

    background: var(--blue);
    color: var(--white);

    border-radius: 4px;

    margin-top: 0.5rem;

    transition: background 0.2s;

    &:focus {
      outline: 4px solid rgba(var(--blue-rgb), 0.5);
      outline-offset: -1px;

      &:hover {
        outline: 1px solid var(--blue);
      }
    }

    &:hover {
      background: transparent;
      color: var(--blue);

      border: 1px solid var(--blue);
    }
  }

  .navigation {
    margin: 0 auto;

    &__text {
      color: var(--gray-700);
    }

    &__link {
      color: var(--blue);
      text-decoration: none;

      transition: 0.2s;

      margin-left: 0.25rem;

      border-radius: 2px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
