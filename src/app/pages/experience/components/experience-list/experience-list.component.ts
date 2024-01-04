import { Component } from '@angular/core';
import { Experience } from '../../interfaces/experience.interface';
import { ExperienceListItemComponent } from '../experience-list-item/experience-list-item.component';

@Component({
  selector: 'gd-experience-list',
  standalone: true,
  imports: [ExperienceListItemComponent],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.scss'
})
export class ExperienceListComponent {
  public readonly experiences: Experience[] = [
    {
        jobTitle: "Front End Web Developer",
        company: {
            name: "Schoox, Inc",
            url: "https://www.schoox.com/"
        },
        date: {
            from: "March 2022",
            to: "Present"
        },
        technologies: ["AngularJS", "Angular 2+", "Bootstrap", "Tailwind", "NG-ZORRO"]
    },
    {
        jobTitle: "Front End Web Developer",
        company: {
            name: "KissMyButton",
            url: "https://kissmybutton.gr/"
        },
        date: {
            from: "April 2021",
            to: "January 2022"
        },
        technologies: ["Angular 2+", "Angular Material"]
    }
  ];
}
