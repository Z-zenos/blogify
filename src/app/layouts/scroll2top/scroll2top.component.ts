import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'blog-scroll2top',
  templateUrl: './scroll2top.component.html',
  styleUrls: ['./scroll2top.component.scss']
})
export class Scroll2topComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event'])
  scroll2top(e: Event) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
