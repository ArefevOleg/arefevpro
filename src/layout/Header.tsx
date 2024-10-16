import React from 'react';
import data from "../data/data.json"
import styles from "../styles/header.module.css"
import {Navigation} from "../components/Navigation";


export const Header = () => {
    return (
        <div className={styles.mainWrapper}>
            <Navigation navTitle={data.navTitle}/>
        </div>
    );
};

