import React, { useEffect, useRef } from 'react';
import FOG from 'vanta/src/vanta.fog';
import styles from "../styles/vanta.module.css";

interface VantaEffectProps {
    children: React.ReactNode;
}

export const VantaEffect: React.FC<VantaEffectProps> = ({ children }) => {
    const vantaRef = useRef(null);

    useEffect(() => {
        FOG({
            el: '#vanta',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x340ee8,
            midtoneColor: 0x18181b,
            lowlightColor: 0xc0cc5,
            baseColor: 0x70707,
            blurFactor: 0.45,
            speed: 0.80,
            zoom: 0.80
        })
    }, []);

    return (
        <div ref={vantaRef} id="vanta" className={styles.bg}>
            {children}
        </div>
    );
};
