import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: calc(100vh - 3.5rem);

  background: ${({ theme }) => theme.primary};
`;

export const Wrapper = styled.section`
  max-width: 1280px;

  margin: 0 1rem;

  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  text-align: center;

  .title {
    font-size: 3.25rem;
  }

  .paragraph {
    max-width: 60rem;

    font-size: 1.25rem;
    line-height: 1.5;
  }

  .link {
    margin-top: 1rem;

    width: 15rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--blue);
    color: var(--white);

    text-decoration: none;
    font-size: 1.25rem;

    border-radius: 5px;
  }

  @media (min-width: 500px) {
    align-items: flex-start;

    text-align: initial;

    .title {
      font-size: 3.5rem;
    }

    .link {
      width: 10rem;
    }
  }

  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`;
