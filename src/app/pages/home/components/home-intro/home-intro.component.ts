import { Component } from '@angular/core';
import { TypeWriterDirective } from "../../directives/type-writer.directive";

@Component({
  selector: 'gd-home-intro',
  standalone: true,
  imports: [TypeWriterDirective],
  templateUrl: './home-intro.component.html',
  styleUrl: './home-intro.component.scss'
})
export class HomeIntroComponent {}
