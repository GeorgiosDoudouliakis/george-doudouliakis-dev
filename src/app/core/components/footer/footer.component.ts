import { Component } from '@angular/core';

@Component({
  selector: 'gd-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public readonly currentYear: number = new Date().getFullYear();
}
