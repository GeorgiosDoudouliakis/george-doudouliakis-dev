import { Component } from '@angular/core';
import { ProjectsListComponent } from "../components";

@Component({
  selector: 'gd-projects',
  standalone: true,
  imports: [ProjectsListComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {}
