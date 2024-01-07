import { Component } from '@angular/core';
import { AboutMeComponent, AboutSkillsComponent } from '../components';

@Component({
  selector: 'gd-about',
  standalone: true,
  imports: [AboutMeComponent, AboutSkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {}
