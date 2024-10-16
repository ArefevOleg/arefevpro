import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/nav.module.css"
import {NavItem} from "../types/data";


interface NavProps {
    navTitle: NavItem[];
}


export const Navigation = ({ navTitle}: any) => {
    return (
        <nav>
            <ul className="block-menu">
                {navTitle.map((item: any) => (
                    <li key={item.id}>
                        <Link to={item.href}>{item.title}</Link>
                    </li>
                ))}
                <div className="block-menu-wall"></div>
            </ul>
        </nav>
    );
};