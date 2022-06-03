import styled from "styled-components";

import { BsHandIndexThumb } from "react-icons/bs";
import { BiSquare } from "react-icons/bi";
import { FcCheckmark } from "react-icons/fc";
import { IoMdCheckboxOutline } from "react-icons/io";

export const Container = styled.main`
  max-width: 900px;

  margin: 4rem 1rem;

  @media (min-width: 900px) {
    margin: 4rem auto;
  }
`;

export const Tab = styled.div`
  display: flex;

  button {
    background: ${({ theme }) => theme.primary};

    padding: 0.8rem 1rem;

    border-right: 1px solid ${({ theme }) => theme.border};
    border-top: 1px solid ${({ theme }) => theme.border};

    &:focus {
      outline: 2px solid rgba(var(--primary-rgb), 0.5);
    }

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

  @media (max-width: 500px) {
    button {
      width: 100%;

      padding: 0.8rem 0;
    }
  }

  @media (min-width: 500px) {
    button {
      padding: 0.8rem 2rem;
    }
  }
`;

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.primary};

  padding: 2rem;

  border: 1px solid ${({ theme }) => theme.border};

  @media (min-width: 768px) {
    padding: 3rem 4rem;
  }
`;

export const Tasks = styled.ul`
  max-width: 100%;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .task {
    width: 100%;
    min-height: 6rem;
    height: auto;

    border: 1px solid ${({ theme }) => theme.borderSecondary};

    display: flex;

    padding: 1rem;

    border-radius: 5px;

    transition: 0.1s;

    position: relative;

    &__checkbox {
      pointer-events: none;
    }

    &__description {
      flex: 1;

      margin-left: 0.8rem;
      margin-right: 1rem;

      word-break: break-all;
    }

    &__user-name {
      margin-left: auto;

      align-self: flex-end;

      position: absolute;
      right: 3rem;
    }

    &__option {
      margin-left: 2rem;

      display: flex;
      align-items: flex-end;

      svg {
        transition: 0.2s;
      }

      &:hover {
        svg {
          fill: var(--blue);
        }
      }

      &:focus {
        outline: 0;

        svg {
          fill: var(--blue);
        }
      }
    }

    &--done {
      opacity: 0.6;

      .task__option {
        pointer-events: none;
      }
    }
  }
`;

export const OptionsIcon = styled(BsHandIndexThumb)`
  width: 1.3rem;
  height: 1.3rem;
`;

export const UncheckedIcon = styled(BiSquare)`
  min-width: 1.3rem;
  min-height: 1.3rem;
`;

export const CheckedIcon = styled(FcCheckmark)`
  width: 1.3rem;
  height: 1.3rem;
`;

export const CheckboxIcon = styled(IoMdCheckboxOutline)`
  width: 1.5rem;
  height: 1.5rem;
`;
