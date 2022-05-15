import styled, { css } from "styled-components";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const Container = styled.div`
  height: 3rem;

  padding: 0.8rem;

  overflow: hidden;

  transition: height 0.2s;

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
