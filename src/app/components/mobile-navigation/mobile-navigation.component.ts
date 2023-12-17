import { Component, signal, WritableSignal } from '@angular/core';
import { NgClass } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NonMobileNavigationComponent } from "../non-mobile-navigation/non-mobile-navigation.component";

@Component({
  selector: 'gd-mobile-navigation',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive, NonMobileNavigationComponent],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.scss'
})
export class MobileNavigationComponent {
  public isMobileMenuActive: WritableSignal<boolean> = signal<boolean>(false);

  public toggleMobileMenu(): void {
    this.isMobileMenuActive.set(!this.isMobileMenuActive());
  }
}
