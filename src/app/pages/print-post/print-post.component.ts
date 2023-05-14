import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { IPost } from 'src/app/models/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'blog-print-post',
  templateUrl: './print-post.component.html',
  styleUrls: ['./print-post.component.scss']
})
export class PrintPostComponent implements OnInit {
  post?: IPost;
  readingTime: number = 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _postService: PostService,
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams
    .pipe(
      switchMap(query => this._postService.getPostByPermalink(query['permalink']))
    )
    .subscribe((post: any) => {
      [this.post] = post;
      this.caculateTimeReading();
      setTimeout(() => window.print(), 2500);
    });
  }

  caculateTimeReading(): void {
    const text = this.post?.content ?? '';
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    this.readingTime = time;
  }

}
