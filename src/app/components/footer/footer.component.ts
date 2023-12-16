import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'gd-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public readonly currentYear: number = new Date().getFullYear();
}
