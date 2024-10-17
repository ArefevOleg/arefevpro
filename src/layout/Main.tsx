import React from 'react';
import dataTS from '../data/dataTS';
import styles from "../styles/main.module.css";

interface ContentSection {
    title: string;
    description: string;
}

interface MainProps {
    selectedItem: string | null;
}

export const Main: React.FC<MainProps> = ({ selectedItem }) => {
    if (selectedItem === null) {
        return <p className={styles.mainWrapper}>Select a section to view its content.</p>;
    }

    const contentKey = selectedItem.toLowerCase().replace(' ', '-') as keyof typeof dataTS.content;
    const content = dataTS.content[contentKey];

    return (
        <div className={styles.mainWrapper}>
            {content ? (
                <>
                    <h2>{content.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: content.description }} />
                </>
            ) : (
                <p>Content not found.</p>
            )}
        </div>
    );
};