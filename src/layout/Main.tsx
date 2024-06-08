import styled from "styled-components";
import photo from "../img/Remove-bg.ai_1714069446173.png";
import pattern9 from "../img/3d-grunge-room-interior-with-spotlight-smoky-atmosphere-background.jpg"
import {VideoBackground} from "../components/VideoBackground";



export const Main = () => {
  return (
      <Section>
          <VideoBackground />
          <ImgWrapper>
              <Photo src={photo} alt=""/>
          </ImgWrapper>
      </Section>
  );
};

const Section = styled.section`
    display: flex;
    height: 75vh;
    justify-content: flex-start;
    align-items: flex-start;
        /* background-image: url(${pattern9}); */
`;

const ImgWrapper = styled.div`

`;

const Photo = styled.img`
    width: 60%;
`;
