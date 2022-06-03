import styled, { css } from "styled-components";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const Container = styled.div`
  height: 4rem;

  padding: 0.8rem;

  overflow: hidden;

  transition: height 0.2s;

  .accordion__button {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:focus {
      outline: 0;
    }
  }

  .accordion__content {
    height: 4rem;

    margin: 2rem 1rem 0;
    overflow-y: auto;
  }

  &.accordion--show {
    height: 7.8rem;
  }

  @media (min-width: 768px) {
    height: 3rem;
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
