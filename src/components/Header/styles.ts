import styled from "styled-components";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaMoon, FaSun } from "react-icons/fa";

export const Container = styled.header`
  background: var(--white);

  height: 3.5rem;

  border-bottom: 1px solid var(--gray-400);
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 2rem;

  .text {
    font-size: 1.2rem;

    color: var(--gray-700);
  }

  .dark {
    margin-left: auto;

    display: flex;
    align-items: center;
    gap: 1rem;

    &__input {
      width: 2rem;
      background: var(--blue);
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }

    &__label {
      color: var(--gray-700);
      font-size: 1.1rem;
    }

    .toggle-label {
      width: 3.7rem;
      background: var(--gray-700);
      padding: 0.25rem;
      border-radius: 4rem;

      position: relative;

      display: flex;
      gap: 0.5rem;

      cursor: pointer;

      &__ball {
        width: 1.5rem;
        height: 1.5rem;
        background: var(--white);
        border-radius: 50%;
        position: absolute;
        top: 0.13rem;
        left: 0.2rem;

        transition: all 0.3s;

        &--checked {
          left: 2rem;
        }
      }
    }
  }
`;

export const HamburgerIcon = styled(GiHamburgerMenu)`
  width: 1.8rem;
  height: 1.8rem;

  fill: var(--gray-700);
`;

export const MoonIcon = styled(FaMoon)`
  width: 1.3rem;
  height: 1.3rem;

  fill: #ffc0cb;
`;

export const SunIcon = styled(FaSun)`
  width: 1.3rem;
  height: 1.3rem;

  fill: var(--yellow);
`;
