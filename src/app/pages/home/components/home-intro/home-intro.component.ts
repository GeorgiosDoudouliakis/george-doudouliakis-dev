import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HomeTypeWriterDirective } from "../../directives/home-type-writer.directive";
import { HomeCvComponent } from "../home-cv/home-cv.component";

@Component({
  selector: 'gd-home-intro',
  standalone: true,
  imports: [HomeTypeWriterDirective, RouterLink, HomeCvComponent],
  templateUrl: './home-intro.component.html',
  styleUrl: './home-intro.component.scss'
})
export class HomeIntroComponent {
  @ViewChild('cv', { read: ViewContainerRef }) public viewRef: ViewContainerRef;

  public showCV(): void {
    const cmpRef = this.viewRef.createComponent(HomeCvComponent);
    cmpRef.instance.viewRef = this.viewRef;
  }
}
