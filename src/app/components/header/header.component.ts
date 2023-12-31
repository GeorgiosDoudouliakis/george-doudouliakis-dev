import { NgOptimizedImage } from "@angular/common";
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MobileNavigationComponent } from "../mobile-navigation/mobile-navigation.component";
import { NonMobileNavigationComponent } from "../non-mobile-navigation/non-mobile-navigation.component";

@Component({
  selector: 'gd-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, MobileNavigationComponent, NonMobileNavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public isOnMobile: WritableSignal<boolean> = signal<boolean>(false);

  public ngOnInit(): void {
    this.isOnMobile.set(window.matchMedia('(max-width: 959px)').matches);
  }
}
