import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";
import { TypeWriterDirective } from "../../directives/type-writer.directive";

@Component({
  selector: 'gd-home-intro',
  standalone: true,
  imports: [TypeWriterDirective, RouterLink, NgOptimizedImage],
  templateUrl: './home-intro.component.html',
  styleUrl: './home-intro.component.scss'
})
export class HomeIntroComponent {}
