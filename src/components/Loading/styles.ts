import styled from "styled-components";

import { CgSpinner } from "react-icons/cg";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999999;

  background: ${({ theme }) => theme.primary};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    animation: spin 1s linear infinite;
  }
`;

export const LoadingIcon = styled(CgSpinner)`
  width: 4rem;
  height: 4rem;

  color: ${({ theme }) => theme.text};
`;
