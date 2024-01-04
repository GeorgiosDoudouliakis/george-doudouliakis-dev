import { Component } from '@angular/core';
import { ExperienceListComponent } from '../components';

@Component({
  selector: 'gd-experience-layout',
  standalone: true,
  imports: [ExperienceListComponent],
  templateUrl: './experience-layout.component.html',
  styleUrl: './experience-layout.component.scss'
})
export class ExperienceLayoutComponent {}
