import { Directive, ElementRef, Input, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { interval, Subscription, takeWhile, tap } from "rxjs";

@Directive({
  selector: '[gdTypeWriter]',
  standalone: true
})
export class TypeWriterDirective implements OnInit, OnDestroy {
  private _charIndex: WritableSignal<number> = signal<number>(0);
  private _interval$: Subscription;
  @Input("gdTypeWriter") public wording: string;

  constructor(private _element: ElementRef) {}

  public ngOnInit(): void {
    this._interval$ = interval(80).pipe(
      tap(() => {
        this._element.nativeElement.innerHTML += this.wording.charAt(this._charIndex());
        this._charIndex.update((prevValue) => prevValue + 1);
      }),
      takeWhile(() => this._charIndex() < this.wording.length)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    if(this._interval$) this._interval$.unsubscribe();
  }
}
