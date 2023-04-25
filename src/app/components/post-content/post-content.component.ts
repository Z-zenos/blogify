import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'blog-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent implements OnInit, AfterViewInit {
  headingList = [];

  constructor(
    private _elRef: ElementRef,
    private _contentService: ContentService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.headingList = Array.from(this._elRef.nativeElement.querySelectorAll('h2, h3'));
    this._contentService.createHeadingList(this.headingList);
  }

}
