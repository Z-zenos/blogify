import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'blog-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() name: string = '';
  @Input() extra: string = 'png';
  @Input() size: string = 'small';

  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.onClick.emit();
  }

}
