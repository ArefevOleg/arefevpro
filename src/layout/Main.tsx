import styled from "styled-components";
import { Container } from "../components/Container";
import photo from "../img/IMG_9939.jpg"

export const Main = () => {
  return (
    <Container>
      <Section>
        <ImgWrapper>
        <Photo src={photo} alt="" />
        </ImgWrapper>
      </Section>
    </Container>
  );
};

const Section = styled.section`
  height: 100vh;
`;

const ImgWrapper = styled.div `
  
`

const Photo = styled.img`
  width: 100%;
`