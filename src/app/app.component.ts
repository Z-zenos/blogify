import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blogify';
  router: string = '';

  constructor(private _location: Location) {

  }

  ngOnInit(): void {
    this.router = this._location.path();
  }
}
