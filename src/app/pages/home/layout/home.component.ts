import { Component } from '@angular/core';
import { HomeIntroComponent } from "../components";

@Component({
  selector: 'gd-home',
  standalone: true,
  imports: [HomeIntroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
