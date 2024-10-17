import React, { useEffect, useRef } from 'react';
import '../styles/LightEffect.css';

const LightEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Initial canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function drawLightEffect() {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function onResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawLightEffect();
    }

    window.addEventListener('resize', onResize);

    drawLightEffect();
  }, []);

  return <canvas ref={canvasRef} className="light-effect-canvas"></canvas>;
};

export default LightEffect;
