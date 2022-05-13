import styled from "styled-components";

export const Container = styled.main`
  max-width: 900px;

  margin: 4rem auto;
`;

export const Wrapper = styled.div`
  background: var(--white);

  padding: 3rem 4rem;

  border: 1px solid var(--gray-400);

  .title {
    margin-bottom: 1rem;
  }
`;

export const AccordionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
