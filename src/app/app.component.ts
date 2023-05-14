import { Component, OnInit } from '@angular/core';
import { ScrollService } from './services/scroll.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

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
    private _scrollService: ScrollService,
    private _router: Router
  ) {

  }

  ngOnInit(): void {
    this._scrollService.scroll$.subscribe((data: number) => {
      this.scrollPosition = data;      
    });

    this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: any) => {
        this.router = event.url;
      });
  }
}
