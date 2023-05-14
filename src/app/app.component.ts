import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blogify';
  router: string = '';
  scrollPosition: number = 0;

  constructor(
    private _location: Location,
    private _scrollService: ScrollService
  ) {

  }

  ngOnInit(): void {
    this._scrollService.scroll$.subscribe((data: number) => {
      this.scrollPosition = data;      
    });

    this.router = this._location.path();
  }
}
