import { Component, Input } from '@angular/core';
import { Experience } from '../../interfaces/experience.interface';

@Component({
  selector: 'gd-experience-list-item',
  standalone: true,
  templateUrl: './experience-list-item.component.html',
  styleUrl: './experience-list-item.component.scss'
})
export class ExperienceListItemComponent {
  @Input({ required: true }) public experience: Experience;
}
