import { Component } from '@angular/core';
import { AboutMeComponent, SkillsComponent } from '../components';

@Component({
  selector: 'gd-about-layout',
  standalone: true,
  imports: [AboutMeComponent, SkillsComponent],
  templateUrl: './about-layout.component.html',
  styleUrl: './about-layout.component.scss'
})
export class AboutLayoutComponent {}
