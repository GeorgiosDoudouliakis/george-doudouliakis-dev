import { Component, signal, WritableSignal } from '@angular/core';
import { NgClass } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NonMobileNavigationComponent } from "../";

@Component({
  selector: 'gd-mobile-navigation',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive, NonMobileNavigationComponent],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.scss',
  providers: [
    {
      provide: Window,
      useValue: window
    }
  ]
})
export class MobileNavigationComponent {
  public isMobileMenuActive: WritableSignal<boolean> = signal<boolean>(false);

  constructor(private _window: Window) {}

  public toggleMobileMenu(): void {
    this.isMobileMenuActive.set(!this.isMobileMenuActive());
    this._window.document.body.style.overflow = this.isMobileMenuActive() ? "hidden" : "auto";
  }
}
