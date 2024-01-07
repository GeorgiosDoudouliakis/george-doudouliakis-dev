import { Component } from '@angular/core';
import { ExperienceListComponent } from '../components';

@Component({
  selector: 'gd-experience',
  standalone: true,
  imports: [ExperienceListComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {}
