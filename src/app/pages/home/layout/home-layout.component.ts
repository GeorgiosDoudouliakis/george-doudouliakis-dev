import { Component } from '@angular/core';
import { HomeIntroComponent } from "../components";

@Component({
  selector: 'gd-home-layout',
  standalone: true,
  imports: [HomeIntroComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {}
