import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('lastestPostSectionEl', { static: false })
  private lastestPostSectionEl?: ElementRef<HTMLDivElement>;

  navEl?: Element | null;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.lastestPostSectionEl) {
      const rect = this.lastestPostSectionEl.nativeElement.getBoundingClientRect();
      rect.top <= 170 ? this.navEl?.classList.add("switch-ui") : this.navEl?.classList.remove("switch-ui");
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.navEl = document.querySelector(".bl__ctgr-box");
  }

}
