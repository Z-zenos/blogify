import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IBookmark } from 'src/app/models/bookmark.interface';
import { IProject } from 'src/app/models/project.interfact';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  today: string = '';
  weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  title: string = 'My Project';

  projects?: IProject[];

  bookmars: IBookmark[] = [
    { name: 'This is a bookmark', 'favicon': 'assets/icons/gmail.png', location: 'Angular', url: 'https://www.tektutorialshub.com/angular/angular-passing-parameters-to-route/' },
    { name: 'This is a bookmark', 'favicon': 'assets/icons/gmail.png', location: 'Angular', url: 'https://www.tektutorialshub.com/angular/angular-passing-parameters-to-route/' },
    { name: 'This is a bookmark', 'favicon': 'assets/icons/gmail.png', location: 'Angular', url: 'https://www.tektutorialshub.com/angular/angular-passing-parameters-to-route/' },
    { name: 'This is a bookmark', 'favicon': 'assets/icons/gmail.png', location: 'Angular', url: 'https://www.tektutorialshub.com/angular/angular-passing-parameters-to-route/' },
    { name: 'This is a bookmark', 'favicon': 'assets/icons/gmail.png', location: 'Angular', url: 'https://www.tektutorialshub.com/angular/angular-passing-parameters-to-route/' },
  ];

  constructor(
    private _projectService: ProjectService,
    private _activatedRoute: ActivatedRoute
  ) { 

  }

  category: string | null = '';

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get('category');
    });

    this._projectService.getAll().subscribe(data => {
      this.projects = data;
    });

    const now = new Date();
    this.today = `${this.weekday[now.getDay()]}, ${now.getDate()} ${this.monthNames[now.getMonth()]}, ${now.getFullYear()}`;
  }




}
