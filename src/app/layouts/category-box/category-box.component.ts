import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ICategory } from 'src/app/models/category.interface';
import { CategoryService } from 'src/app/services/category.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'blog-category-box',
  templateUrl: './category-box.component.html',
  styleUrls: ['./category-box.component.scss']
})
export class CategoryBoxComponent implements OnInit {

  @Input() scrollPosition: number = 0;
  categories: ICategory[] = [];
  router: string = '';

  constructor(
    private _categoryService: CategoryService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._categoryService.getAll(7).subscribe((categories: ICategory[]) => {
      this.categories = categories;
    });

    this._router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe((event: any) => {
      this.router = event.url;
    });
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }


}
