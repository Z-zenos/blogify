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

  awards = ['clap', 'heart', 'star', 'light', 'money', 'rocket', 'gift', 'crown', 'trophy', 'sprout', 'time'];

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

}
