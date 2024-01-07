import { Component } from '@angular/core';

@Component({
  selector: 'gd-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  public readonly skills: string[] = ["HTML", "CSS", "JavaScript", "TypeScript", "Angular 2+", "Git", "GitHub"];
}
