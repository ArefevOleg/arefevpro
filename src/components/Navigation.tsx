import React from 'react';
import { Link } from 'react-router-dom';
import dataTS from '../data/dataTS';
import styles from "../styles/nav.module.css";

interface NavigationItem {
    title: string;
    link: string;
}

interface NavigationProps {
    onItemClick: (item: NavigationItem) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onItemClick }) => {
    return (
        <nav>
            <ul className={styles.wrapper}>
                {dataTS.navigation.items.map((item) => (
                    <li key={item.title} onClick={() => onItemClick(item)}>
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
