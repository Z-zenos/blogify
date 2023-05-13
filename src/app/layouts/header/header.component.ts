import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/services/sound.service';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _soundService: SoundService) { }

  ngOnInit(): void {

  }

  playKeySound() {
    this._soundService.typeSound();
  }

}
