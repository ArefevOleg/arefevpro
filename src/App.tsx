import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styles from "./styles/app.module.css"
import {Main} from "./layout/Main";
import {Blog} from "./layout/Blog";
import {VantaEffect} from "./components/VantaEffect";
import { Overlay } from "./components/Overlay";
import data from "../src/data/data.json"
import {Data} from "./types/data"
import {Header} from "./layout/Header";


const App: React.FC = () => {
    return (
        <Router>
            <Overlay>
            <div className="apppp">
                <Header/>
                <Routes>
                    {data.navTitle.map((item) => {
                        const sectionData = data[item.id as keyof Data];
                        if (sectionData) {
                            return (
                                <Route
                                    key={item.id}
                                    path={item.href}
                                    element={<Main  data={sectionData}/>}
                                />
                            );
                        }
                    })}
                </Routes>
            </div>
            </Overlay>
        </Router>
    );
};

export default App;