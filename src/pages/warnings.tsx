import { NextPage } from "next";
import { Accordion } from "../components/Accordion";
import { Header } from "../components/Header";
import {
  AccordionsWrapper,
  Container,
  Wrapper,
} from "../styles/pages/warnings";

const Warnings: NextPage = () => {
  return (
    <>
      <Header />

      <Container>
        <Wrapper>
          <h2 className="title">Avisos</h2>

          <AccordionsWrapper>
            <Accordion title="Pra hoje!">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              tempore fugiat rem iure adipisci nisi cumque repellat quasi
              veritatis iusto asperiores vel inventore animi odit cum aliquam,
              maiores repudiandae ex.
            </Accordion>

            <Accordion title="Pra amanhã!">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              tempore fugiat rem iure adipisci nisi cumque repellat quasi
              veritatis iusto asperiores vel inventore animi odit cum aliquam,
              maiores repudiandae ex.
            </Accordion>
          </AccordionsWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Warnings;
