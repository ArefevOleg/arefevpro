import data from '../data/data.json';

export interface NavItem {
    id: string;
    title: string;
    href: string;
}

export interface ContentItem {
    id: string;
    title: string;
    content: string;
}

export interface Data {
    navTitle: NavItem[];
    AboutMe: ContentItem[];
    Projects: ContentItem[];
    Photo: ContentItem[];
    Portfolio: ContentItem[];
}

export default data;
