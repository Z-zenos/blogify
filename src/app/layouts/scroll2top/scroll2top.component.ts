import { Component, HostListener, OnInit } from '@angular/core';
import { SoundService } from 'src/app/services/sound.service';

@Component({
  selector: 'blog-scroll2top',
  templateUrl: './scroll2top.component.html',
  styleUrls: ['./scroll2top.component.scss']
})
export class Scroll2topComponent implements OnInit {

  constructor(private _soundService: SoundService) { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event'])
  scroll2top() {
    this._soundService.button();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
