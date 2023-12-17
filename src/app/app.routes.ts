import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/layout/home-layout.component").then(({ HomeLayoutComponent }) => HomeLayoutComponent)
  },
  {
    path: "about",
    loadComponent: () => import("./pages/about/layout/about-layout.component").then(({ AboutLayoutComponent }) => AboutLayoutComponent),
  },
  {
    path: "experience",
    loadComponent: () => import("./pages/experience/layout/experience-layout.component").then(({ ExperienceLayoutComponent }) => ExperienceLayoutComponent),
  },
  {
    path: "projects",
    loadComponent: () => import("./pages/projects/layout/projects-layout.component").then(({ ProjectsLayoutComponent }) => ProjectsLayoutComponent),
  },
  {
    path: "contact",
    loadComponent: () => import("./pages/contact/layout/contact-layout.component").then(({ ContactLayoutComponent }) => ContactLayoutComponent),
  }
];
