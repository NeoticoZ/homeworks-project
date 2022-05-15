import styled, { css } from "styled-components";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const Container = styled.div`
  height: 3rem;

  padding: 0.8rem;

  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.border};

  transition: height, background 0.2s;

  &.accordion--show {
    height: 7.8rem;
  }

  .accordion__button {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .accordion__content {
    margin: 1rem 1rem 0;
  }

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

const iconCSS = css`
  width: 1.4rem;
  height: 1.4rem;
`;

export const ArrowUpIcon = styled(IoIosArrowUp)`
  ${iconCSS}
`;

export const ArrowDownIcon = styled(IoIosArrowDown)`
  ${iconCSS}
`;
