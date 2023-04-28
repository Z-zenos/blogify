import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  today: string = '';
  weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  title: string = 'My Project';

  constructor() { }

  ngOnInit(): void {
    const now = new Date();
    this.today = `${this.weekday[now.getDay()]}, ${now.getDate()} ${this.monthNames[now.getMonth()]}, ${now.getFullYear()}`;
  }




}
