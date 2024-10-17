import React from 'react';
import Header from './script/H';
import Canvas from './script/Canvas';
import Hero from './script/Hero';
import styles from "./styles/app.module.css"
import './styles/eclipx.css';

const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <Canvas />
            <div className="accent-lines">
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="heroSubP">
                <p>Introducing</p>
            </div>
            <Hero />
        </div>
    );
};

export default App;
