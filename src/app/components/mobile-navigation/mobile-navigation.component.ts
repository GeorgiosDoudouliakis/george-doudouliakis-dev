import { Component, signal, WritableSignal } from '@angular/core';
import { NgClass } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NonMobileNavigationComponent } from "../non-mobile-navigation/non-mobile-navigation.component";

@Component({
  selector: 'gd-mobile-nav',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive, NonMobileNavigationComponent],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})
export class MobileNavigationComponent {
  public isMobileMenuActive: WritableSignal<boolean> = signal<boolean>(false);

  public toggleMobileMenu(): void {
    this.isMobileMenuActive.set(!this.isMobileMenuActive());
  }
}
