import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category.interface';

@Component({
  selector: 'blog-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() category?: ICategory;

  constructor() { }

  ngOnInit(): void {
  }

}
