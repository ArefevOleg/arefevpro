import React, {useEffect, useRef, useState} from 'react';
import styles from '../styles/overlay.module.css';
import FOG from "vanta/src/vanta.fog"; // Создайте файл стилей для этого компонента

interface OverlayProps {
    children: React.ReactNode;
}

export const Overlay: React.FC<OverlayProps> = ({ children }) => {
    const vantaRef = useRef(null);
    const [isVantaEffectVisible, setVantaEffectVisible] = useState(true);


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

    const handleButtonClick = () => {
        setVantaEffectVisible(false);
    };


    return (
        <div ref={vantaRef} className={styles.overlayContainer} id="vanta">
            {isVantaEffectVisible && (
                <div className={styles.overlay} onClick={handleButtonClick}>
                    <div className={styles.overlayContent}>
                        <h1>Welcome!</h1>
                    </div>
                </div>
            )}
            <div className={isVantaEffectVisible ? styles.hiddenContent : styles.content}>
                {children}
            </div>
        </div>
    );
};

