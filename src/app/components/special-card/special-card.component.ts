import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project.interfact';

@Component({
  selector: 'blog-special-card',
  templateUrl: './special-card.component.html',
  styleUrls: ['./special-card.component.scss']
})
export class SpecialCardComponent implements OnInit {
  @Input() project?: IProject;

  constructor() { }

  ngOnInit(): void {
  }

}
