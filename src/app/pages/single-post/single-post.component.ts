import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit, AfterViewInit {
  @ViewChild('content', { static: false }) contentEl?: ElementRef;

  readingTime: number = 0;

  constructor(private _cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.caculateTimeReading();
    this._cdref.detectChanges();
  }

  caculateTimeReading() {
    const text = this.contentEl?.nativeElement.innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    this.readingTime = time;
  }

}
