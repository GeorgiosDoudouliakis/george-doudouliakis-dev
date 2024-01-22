import { Component } from '@angular/core';
import { Project } from "../../interfaces/project.interface";
import { ProjectsListItemComponent } from "../projects-list-item/projects-list-item.component";

@Component({
  selector: 'gd-projects-list',
  standalone: true,
  imports: [ProjectsListItemComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {
  public readonly projects: Project[] = [
    {
      name: "FORMULA ONE",
      type: "Personal",
      description: "Website with stats about Formula One from 1950 to present. Includes: details for drivers and constructors, standings for each year from 1950 to present, circuits information, statistics showing points per circuit, map with the location of each circuit and schedule for current season. Made with Angular v14.2.3 and Ergast Developer API.",
      technologies: ["Angular", "Angular Material", "Open Layers"],
      links: {
        preview: 'https://georgiosdoudouliakis.github.io/formula-one/',
        github: 'https://github.com/GeorgiosDoudouliakis/formula-one'
      }
    },
    {
      name: "MOVIE TRENDS",
      type: "Personal",
      description: "Website for movies, tv series and actors. Includes: Search for movies, tv series and actors by keyword, top rated - popular - now playing - upcoming categories for movies, airing today - on air - popular - top rated categories for tv series and details for movies, tv series and actors. Made with Vue v3.2.13 and The Movie Database (TMDB) API.",
      technologies: ["Vue", "Tailwind"],
      links: {
        preview: 'https://superlative-lily-d70155.netlify.app/',
        github: 'https://github.com/GeorgiosDoudouliakis/movie-trends'
      }
    },
  ]
}
