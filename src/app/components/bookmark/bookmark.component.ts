import { Component, Input, OnInit } from '@angular/core';
import { IBookmark } from 'src/app/models/bookmark.interface';

@Component({
  selector: 'blog-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  @Input() bookmark?: IBookmark;

  constructor() { }

  ngOnInit(): void {
  }

}
