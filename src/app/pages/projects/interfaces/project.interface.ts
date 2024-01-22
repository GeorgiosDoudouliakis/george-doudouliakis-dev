export interface Project {
  name: string;
  type: "Personal" | "Professional";
  description: string;
  technologies: string[];
  links: {
    preview: string;
    github: string;
  };
}
