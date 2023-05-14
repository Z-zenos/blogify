import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { IPost } from 'src/app/models/post.interface';
import { PostService } from 'src/app/services/post.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'blog-print-post',
  templateUrl: './print-post.component.html',
  styleUrls: ['./print-post.component.scss']
})
export class PrintPostComponent implements OnInit {
  post?: IPost;
  readingTime: number = 0;
  title: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _postService: PostService,
    private _titleService: Title
  ) { 

  }

  ngOnInit(): void {
    this._activatedRoute.queryParams
    .pipe(
      switchMap(query => {
        this.title = query['permalink'];
        this._titleService.setTitle(this.title);
        return this._postService.getPostByPermalink(query['permalink'])
      })
    )
    .subscribe((post: any) => {
      [this.post] = post;
      this.caculateTimeReading();

      setTimeout(() => {
        window.print();
        window.close();

      }, 2500);
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
