import styled, { css } from "styled-components";

import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

export const Wrapper = styled.div`
  .title {
    color: ${({ theme }) => theme.text};
  }

  .description {
    margin-top: 0.5rem;
    color: var(--gray-600);
  }

  .option-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    margin-top: 1.5rem;

    &__button {
      padding: 0.6rem;

      color: var(--white);
      background: var(--blue);

      border-radius: 5px;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      transition: opacity 0.2s;

      &--cancel {
        color: ${({ theme }) => theme.text};

        background: transparent;
        border: 1px solid var(--gray-400);
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const iconCSS = css`
  fill: var(--white);

  width: 20px;
  height: 20px;
`;

export const ConfirmIcon = styled(IoMdCheckmark)`
  ${iconCSS}
`;

export const CloseIcon = styled(AiOutlineClose)`
  ${iconCSS}
`;
