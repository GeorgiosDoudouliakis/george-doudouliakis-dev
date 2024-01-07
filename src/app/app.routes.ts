import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/layout/home.component").then(({ HomeComponent }) => HomeComponent)
  },
  {
    path: "about",
    loadComponent: () => import("./pages/about/layout/about.component").then(({ AboutComponent }) => AboutComponent),
  },
  {
    path: "experience",
    loadComponent: () => import("./pages/experience/layout/experience.component").then(({ ExperienceComponent }) => ExperienceComponent),
  },
  {
    path: "projects",
    loadComponent: () => import("./pages/projects/layout/projects.component").then(({ ProjectsComponent }) => ProjectsComponent),
  },
  {
    path: "contact",
    loadComponent: () => import("./pages/contact/layout/contact.component").then(({ ContactComponent }) => ContactComponent),
  }
];
