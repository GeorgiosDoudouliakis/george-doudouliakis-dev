import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HomeTypeWriterDirective } from "../../directives/home-type-writer.directive";

@Component({
  selector: 'gd-home-intro',
  standalone: true,
  imports: [HomeTypeWriterDirective, RouterLink],
  templateUrl: './home-intro.component.html',
  styleUrl: './home-intro.component.scss'
})
export class HomeIntroComponent {}
