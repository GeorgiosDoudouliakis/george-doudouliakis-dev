import { Component, Input } from '@angular/core';
import { Project } from "../../interfaces/project.interface";

@Component({
  selector: 'gd-projects-list-item',
  standalone: true,
  templateUrl: './projects-list-item.component.html',
  styleUrl: './projects-list-item.component.scss'
})
export class ProjectsListItemComponent {
  @Input({ required: true }) public project: Project;
}
