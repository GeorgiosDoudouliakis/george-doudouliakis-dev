import { Directive, ElementRef, Input, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { interval, Subscription, takeWhile, tap } from "rxjs";

@Directive({
  selector: '[gdHomeTypeWriter]',
  standalone: true
})
export class HomeTypeWriterDirective implements OnInit, OnDestroy {
  private _charIndex: WritableSignal<number> = signal<number>(0);
  private _interval$: Subscription;
  @Input("gdHomeTypeWriter") public wording: string;

  constructor(private readonly _element: ElementRef) {}

  public ngOnInit(): void {
    this._interval$ = interval(80).pipe(
      tap(() => {
        this._element.nativeElement.innerHTML += this.wording.charAt(this._charIndex());
        this._charIndex.update((prevIndex) => prevIndex + 1);
      }),
      takeWhile(() => this._charIndex() < this.wording.length)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    if(this._interval$) this._interval$.unsubscribe();
  }
}
