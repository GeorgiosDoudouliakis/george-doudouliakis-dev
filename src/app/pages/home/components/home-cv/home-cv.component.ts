import { Component, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'gd-home-cv',
  standalone: true,
  imports: [],
  templateUrl: './home-cv.component.html',
  styleUrl: './home-cv.component.scss'
})
export class HomeCvComponent {
  @Input({ required: true }) public viewRef: ViewContainerRef;

  public closeCV(): void {
    this.viewRef.clear();
  }
}
