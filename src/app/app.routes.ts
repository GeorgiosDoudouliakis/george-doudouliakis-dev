import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    title: "George Doudouliakis - Front End Web Developer",
    loadComponent: () => import("./pages/home/layout/home.component").then(({ HomeComponent }) => HomeComponent)
  },
  {
    path: "about",
    title: "About | George Doudouliakis - Front End Web Developer",
    loadComponent: () => import("./pages/about/layout/about.component").then(({ AboutComponent }) => AboutComponent),
  },
  {
    path: "experience",
    title: "Experience | George Doudouliakis - Front End Web Developer",
    loadComponent: () => import("./pages/experience/layout/experience.component").then(({ ExperienceComponent }) => ExperienceComponent),
  },
  {
    path: "projects",
    title: "Projects | George Doudouliakis - Front End Web Developer",
    loadComponent: () => import("./pages/projects/layout/projects.component").then(({ ProjectsComponent }) => ProjectsComponent),
  },
  {
    path: "contact",
    title: "Contact | George Doudouliakis - Front End Web Developer",
    loadComponent: () => import("./pages/contact/layout/contact.component").then(({ ContactComponent }) => ContactComponent),
  },
  {
    path: "**",
    title: "Page Not Found | George Doudouliakis - Front End Web Developer",
    loadComponent: () => import("./pages/not-found/layout/not-found.component").then(({ NotFoundComponent }) => NotFoundComponent)
  }
];
