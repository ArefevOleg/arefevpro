
import { useEffect } from 'react';
import * as Vanta from 'vanta';

// Инициализация эффекта Vanta.js
const VantaEffect = () => {
  useEffect(() => {
    Vanta.particle({
      el: '#vanta-particles',
      mouseTracking: true,
      touchTracking: true,
      gyroTracking: false,
      min: 1,
      max: 1,
      spacing: 25.0,
      startColor: 0xffffff,
      midColor: 0xffffff,
      endColor: 0xffffff,
      shader: 0.0,
      sizeMin: 0.5,
      sizeMax: 1.0,
      blendFactor: 0.5,
      backgroundColor: 0x0,
    });

    // Cleanup function to destroy the Vanta effect when the component unmounts
    return () => {
      if (Vanta) {
        Vanta.off();
      }
    };
  }, []);

  return null;
};

export default VantaEffect;
