import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {
  @Input() srcImg = "";

  constructor() { }

  ngOnInit(): void {
  }

}
