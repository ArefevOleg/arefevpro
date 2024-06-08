import React from 'react';
import styled from "styled-components";
import videoSrc = '../video/bgVideo.mp4';

export const VideoBackground = () => {
  return (
    <WrapperVideo>
      <Video autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
      </Video>
    </WrapperVideo>
  );
};

const WrapperVideo = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1; 
`

const Video = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translateX(-50%) translateY(-50%);
`