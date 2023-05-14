import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ICategory } from 'src/app/models/category.interface';
import { IPost } from 'src/app/models/post.interface';
import { CategoryService } from 'src/app/services/category.service';
import { ContentService } from 'src/app/services/content.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit, AfterContentChecked {
  readingTime: number = 0;
  bookmarked: boolean = false;
  clapped: boolean = false;
  hearted: boolean = false;
  stared: boolean = false;
  lighted: boolean = false;
  moneyed: boolean = false;
  isListening: boolean = false;
  post?: IPost;
  categories: ICategory[] = [];
  awards = ['clap', 'heart', 'star', 'light', 'money', 'rocket', 'gift', 'crown', 'trophy', 'sprout', 'time'];
  headingList$?: Observable<HTMLHeadingElement[]>;
  relatedPosts: IPost[] = [];

  hasIncreased: boolean = false;

  constructor(
    private _cdref: ChangeDetectorRef,
    private _contentService: ContentService,
    private _activatedRoute: ActivatedRoute,
    private _postService: PostService,
    private _categoryService: CategoryService,
  ) { }

  ngOnInit() {
    this._categoryService.getAll(0).subscribe((data: ICategory[]) => {
      this.categories = data;
    });

    this._activatedRoute.queryParams
      .pipe(
        switchMap(query => this._postService.getPostByPermalink(query['permalink'])),
      )
      .subscribe((post: any) => {
        [this.post] = post;
        this.displayRelatedPost();
        console.log("consecutive ????");
        
        !this.hasIncreased && this._postService.increaseViewPost(this.post?.id, this.post?.view ?? 0);
        this.hasIncreased = true;
      });
  }

  ngAfterContentChecked() {

    this.caculateTimeReading();
    this.headingList$ = this._contentService.headingList$;
    this._cdref.detectChanges();
  }

  caculateTimeReading(): void {
    const text = this.post?.content ?? '';
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    this.readingTime = time;
  }

  toggleSrcImage(e: Event): void {
    const img = e.target as HTMLImageElement;
    const src = img.src;
    const index = src.lastIndexOf("/") + 1;
    const filenameWithExt = src.substring(index);
    const [filename, ext] = filenameWithExt.split('.');

    let newFileName;
    newFileName = filename.slice(-2) === 'ed' ? filename.slice(0, -2) : filename + "ed";
    img.src = `http://localhost:4200/assets/icons/${newFileName}.${ext}`;
  }

  getColor(tagName: string) {
    return this.categories.find(c => c.name === tagName)?.color ?? '';
  }

  hasRead: boolean = false;
  listenPost() {
    this.isListening = !this.isListening;
    if(!this.hasRead) {
      this._postService.readingPost(this.post?.content ?? '');
      this.hasRead = true;
    }
    else {
      this._postService.playPost();
    }
  }

  downloadPDF(): void {
    window.open(`/print-post?permalink=${this.post?.permalink}`, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
  }

  displayRelatedPost() {
    this._postService.getRelatedPost(this.post?.title ?? '').subscribe((data) => {
      this.relatedPosts = data;
    });
  }

}
