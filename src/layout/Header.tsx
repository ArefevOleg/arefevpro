import React from 'react';
import styles from "../styles/header.module.css";
import { Navigation } from "../components/Navigation";
import { NavigationItem } from "../data/dataTS";

interface HeaderProps {
    onItemClick: (item: NavigationItem) => void;
}

export const Header: React.FC<HeaderProps> = ({ onItemClick }) => {
    return (
        <div className={styles.mainWrapper}>
            <Navigation onItemClick={onItemClick} />
        </div>
    );
};
