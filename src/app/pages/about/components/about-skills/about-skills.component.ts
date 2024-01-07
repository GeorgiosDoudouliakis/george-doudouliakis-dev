import { Component } from '@angular/core';

@Component({
  selector: 'gd-about-skills',
  standalone: true,
  imports: [],
  templateUrl: './about-skills.component.html',
  styleUrl: './about-skills.component.scss'
})
export class AboutSkillsComponent {
  public readonly skills: string[] = ["HTML", "CSS", "JavaScript", "TypeScript", "Angular 2+", "Git", "GitHub"];
}
