import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SoundService } from 'src/app/services/sound.service';

@Component({
  selector: 'blog-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color: string = '';
  @Input() title: string = '';
  @Input() isDisabled: boolean = false;
  @Input() icon: string = '';
  @Input() iconPosition: 'left' | 'right' = 'right';
  @Input() type: 'button' | 'submit' = 'button';

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _soundService: SoundService) { }

  ngOnInit(): void {
  }

  handleClick() {
    this._soundService.button();
    this.onClick.emit();
  }

}
