import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styles from "./styles/app.module.css"
import {Main} from "./layout/Main";
import {Blog} from "./layout/Blog";
import {VantaEffect} from "./components/VantaEffect";
import { Overlay } from "./components/Overlay";


const App: React.FC = () => {
    return (
        <Router>
            <div className={styles.app}>
                <VantaEffect>
                    <div className={styles.bg}>
                        {/* Ваш дополнительный код здесь */}
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Main</Link>
                                </li>
                                <li>
                                    <Link to="/about">Blog</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </VantaEffect>

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<Blog />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;