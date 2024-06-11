import styled from "styled-components";

export const Header = () => {
  return (
      <HeaderWrapper>
        <MainTatle>Сайт&nbsp; в&nbsp; разработке</MainTatle>
      </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    background-color: rgba(14, 13, 13, 0);
`;

const MainTatle = styled.h1`
font-size: calc( (100vw - 480px)/(1280 - 480) * (36 - 18) + 18px);
font-family: "Rubik Doodle Shadow", system-ui;
  font-weight: 400;
  font-style: normal;
`;
