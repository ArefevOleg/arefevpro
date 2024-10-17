
export interface NavigationItem {
    title: string;
    link: string;
}

interface ContentSection {
    title: string;
    description: string;
}

interface DataTS {
    navigation: {
        items: NavigationItem[];
    };
    content: {
        aboutMe: ContentSection;
        projects: ContentSection;
        study: ContentSection;
        blog: ContentSection;
    };
}

const portfolio: DataTS = {
    navigation: {
        items: [
            {
                title: "About Me",
                link: "#about-me"
            },
            {
                title: "Projects",
                link: "#projects"
            },
            {
                title: "Study",
                link: "#study"
            },
            {
                title: "Blog",
                link: "#blog"
            }
        ]
    },
    content: {
        aboutMe: {
            title: "About Me",
            description: "<p>Welcome to my portfolio! I am a passionate developer with a love for creating innovative solutions. With years of experience in various programming languages and technologies, I strive to deliver high-quality software that meets the needs of my clients.</p>"
        },
        projects: {
            title: "Projects",
            description: "<p>Here you can find some of my recent projects. I have worked on a variety of projects, ranging from web applications to mobile apps. Each project presents a unique challenge and an opportunity to learn and grow as a developer.</p>"
        },
        study: {
            title: "Study",
            description: "<p>Education is a key component of my personal and professional development. I have completed several courses and certifications in computer science and related fields. I am always looking to expand my knowledge and stay up-to-date with the latest trends and technologies.</p>"
        },
        blog: {
            title: "Blog",
            description: "<p>In my blog, I share my thoughts and experiences on various topics related to software development, technology, and personal growth. I hope that my insights and stories will be helpful and inspiring to others who are on a similar journey.</p>"
        }
    }
};

export default portfolio;
