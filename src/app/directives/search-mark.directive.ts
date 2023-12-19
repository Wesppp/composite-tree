import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

import { debounceTime, Subject, takeUntil } from 'rxjs';

import { SearchMarkDirectiveClasses } from '../enums/search-mark-directive-classes.enum';

@Directive({
  selector: '[appSearchMark]',
  standalone: true
})
export class SearchMarkDirective implements OnDestroy, OnInit {
  private searchMarkSubject: Subject<string> = new Subject<string>();
  private unsubscribe$: Subject<void> = new Subject<void>();

  @Input()
  public set appSearchMark(searchText: string) {
    this.searchMarkSubject.next(searchText);
  }

  constructor(private el: ElementRef,
              private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.initializeListeners();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initializeListeners(): void {
    this.searchMarkSubject.pipe(
      debounceTime(500),
      takeUntil(this.unsubscribe$)
    ).subscribe((searchText: string) => {
      this.mark(searchText);
    });
  }

  private mark(searchText: string): void {
    const nodeText: string = this.el.nativeElement.textContent.toLowerCase();

    this.renderer.removeClass(this.el.nativeElement, SearchMarkDirectiveClasses.MARK);
    this.renderer.removeClass(this.el.nativeElement, SearchMarkDirectiveClasses.DISABLE);

    if(searchText) {
      nodeText.includes(searchText.toLowerCase()) ?
        this.renderer.addClass(this.el.nativeElement, SearchMarkDirectiveClasses.MARK) :
        this.renderer.addClass(this.el.nativeElement, SearchMarkDirectiveClasses.DISABLE);
    }
  }
}
