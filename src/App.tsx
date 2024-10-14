import {useEffect} from "react";
import CLOUDS from "vanta/src/vanta.fog"
import styles from "./styles/app.module.css"
import img from "./img/bb.png"

function App() {
    useEffect(() => {
        CLOUDS({
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
    <div className={styles.app}>
        <div className={styles.bg} id="vanta">
        </div>
    </div>
  );
}

export default App;
