import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, HostListener, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[scrollColor]'
})
export class ScrollColorDirective implements OnInit, AfterViewInit, OnDestroy {
  navEl?: Element | null;

  constructor(
    private _elRef: ElementRef<HTMLElement>,
    private _vcRef: ViewContainerRef,
    private _tplRef: TemplateRef<any>,
    private _cdref: ChangeDetectorRef
  ) { }

  @HostListener('window:scroll', ['$event'])
  onScrollIntoView() {
    if (this._elRef) {
      const { top, bottom } = (this._elRef.nativeElement.previousSibling as HTMLElement).getBoundingClientRect();
      top <= 170 ? this.navEl?.classList.add("switch-ui") : this.navEl?.classList.remove("switch-ui");
      bottom <= 170 && this.navEl?.classList.remove("switch-ui");
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.navEl = document.querySelector(".bl__ctgr-box");
    this._vcRef.createEmbeddedView(this._tplRef);
    this._cdref.detectChanges();
  }

  ngOnDestroy(): void {
    this._vcRef.clear();
  }
}
