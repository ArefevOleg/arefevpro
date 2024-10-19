import React from 'react';
import '../styles/eclipx.css';
import img from "../img/bb.png"
import "../styles/hero.css"
import Smoke from "./Smoke";


const Hero = () => {
  return (
    <div className="hero">
      <div className="heroT">
        <h2>AREFEVPRO</h2>
        <h2>AREFEVPRO</h2>
        <div className="box">
          <img src={img} alt="img" className="centered-image"/>
          <div className="smoke-overlay">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;