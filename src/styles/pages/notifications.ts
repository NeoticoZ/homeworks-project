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

  padding: 1.5rem;

  border: 1px solid ${({ theme }) => theme.border};

  .title {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    padding: 3rem 4rem;
  }
`;

export const AccordionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
