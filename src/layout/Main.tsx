import React from 'react';
import styles from "../styles/main.module.css"
import {ContentItem} from "../types/data";

interface ContentProps {
    data: ContentItem[];
}

export const Main = ({ data }: ContentProps) => {
    return (
        <div className="content">
            {data.map((item) => (
                <div key={item.id} className="content-block">
                    <h2>{item.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
            ))}
        </div>
    );
};

