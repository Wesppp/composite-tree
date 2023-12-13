import { Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

import { debounceTime, Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[appSearchMark]',
  standalone: true
})
export class SearchMarkDirective implements OnDestroy {
  private searchMarkSubject: Subject<string> = new Subject<string>();
  private unsubscribe$: Subject<void> = new Subject<void>();

  @Input()
  public set appSearchMark(searchText: string) {
    this.searchMarkSubject.next(searchText);
  }

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    this.searchMarkSubject.pipe(
      debounceTime(500),
      takeUntil(this.unsubscribe$)
    ).subscribe((searchText) => {
      this.mark(searchText);
    })
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private mark(searchText: string): void {
    const nodeText: string = this.el.nativeElement.textContent.toLowerCase();

    if (searchText && nodeText.includes(searchText.toLowerCase())) {
      this.renderer.removeClass(this.el.nativeElement, 'disable');
      this.renderer.addClass(this.el.nativeElement, 'mark');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'mark');
      this.renderer.addClass(this.el.nativeElement, 'disable');
    }

    if (!searchText) {
      this.renderer.removeClass(this.el.nativeElement, 'mark');
      this.renderer.removeClass(this.el.nativeElement, 'disable');
    }
  }
}
