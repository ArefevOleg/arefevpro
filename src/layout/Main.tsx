import styled from "styled-components";
import photo from "../img/Remove-bg.ai_1714069446173.png";
import videoSrc from "../video/bgVideo.mp4";
import {Header} from "./Header";


export const Main = () => {
    return (
        <div>
            <Header />
            <Img src={photo} alt=""/>
            <Wrapper>
                <Video autoPlay muted loop playsInline>
                    <source src={videoSrc} type="video/mp4" />
                </Video>
            </Wrapper>
        </div>
    );
};

const Wrapper = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
`

const Video = styled.video`
    position: absolute;
   
    
    @media (min-aspect-ratio: 16/9) {
        width: 100%;
        height: auto;
    }

    @media (max-aspect-ratio: 16/9) {
        width: auto;
        height: 100%;
    }

    @media (max-width: 767px) {
        display: none;
    }
`
const Img = styled.img`
    position: absolute;
    
    @media (min-aspect-ratio: 16/9) {
        width: 70%;
        height: auto;
    }

    @media (max-aspect-ratio: 16/9) {
        width: auto;
        height: 70%;
    }

    @media (max-width: 480px) {
        display: none;
    }
`
