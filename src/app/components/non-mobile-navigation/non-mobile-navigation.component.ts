import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'gd-non-mobile-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './non-mobile-navigation.component.html',
  styleUrl: './non-mobile-navigation.component.scss'
})
export class NonMobileNavigationComponent {}
