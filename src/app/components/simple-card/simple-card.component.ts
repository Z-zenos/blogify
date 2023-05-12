import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post.interface';

@Component({
  selector: 'blog-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {
  @Input() post?: IPost;

  constructor() { }

  ngOnInit(): void {
  }

}
