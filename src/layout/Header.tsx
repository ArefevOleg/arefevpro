import styled from "styled-components";
import { Container } from "../components/Container";

export const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <MainTatle>Сайт&nbsp; в&nbsp; разработке</MainTatle>
      </HeaderWrapper>
    </Container>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #0e0d0d;
`;

const MainTatle = styled.h1`
font-size: calc( (100vw - 480px)/(1280 - 480) * (36 - 18) + 18px);
font-family: "Rubik Doodle Shadow", system-ui;
  font-weight: 400;
  font-style: normal;
`;
