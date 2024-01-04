export interface Experience {
    jobTitle: string;
    company: {
        name: string;
        url: string;
    };
    date: {
        from: string;
        to: string;
    };
    technologies: string[];
}