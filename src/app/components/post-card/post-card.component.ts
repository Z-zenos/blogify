import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() srcImg = "";
  @Input() tagsStr = "";
  tags: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tags = this.tagsStr.split(",");
  }

}
