import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit, AfterViewInit {
  @ViewChild('content', { static: false }) contentEl?: ElementRef;

  readingTime: number = 0;
  bookmarked: boolean = false;
  clapped: boolean = false;
  hearted: boolean = false;
  stared: boolean = false;
  lighted: boolean = false;
  moneyed: boolean = false;

  constructor(private _cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.caculateTimeReading();
    this._cdref.detectChanges();
  }

  caculateTimeReading(): void {
    const text = this.contentEl?.nativeElement.innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    this.readingTime = time;
  }

  toggle(typeIcon: string): void {
    switch (typeIcon) {
      case 'bookmark':
        this.bookmarked = !this.bookmarked;
        break;

      case 'clap':
        this.clapped = !this.clapped;
        break;

      case 'heart':
        this.hearted = !this.hearted;
        break;

      case 'money':
        this.moneyed = !this.moneyed;
        break;

      case 'star':
        this.stared = !this.stared;
        break;

      case 'light':
        this.lighted = !this.lighted;
        break;
    }
  }

}
