import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category.interface';
import { CategoryService } from 'src/app/services/category.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'blog-category-box',
  templateUrl: './category-box.component.html',
  styleUrls: ['./category-box.component.scss']
})
export class CategoryBoxComponent implements OnInit {

  categories: ICategory[] = [];
  @Input() scrollPosition: number = 0;

  constructor(
    private _categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this._categoryService.getAll(7).subscribe((categories: ICategory[]) => {
      this.categories = categories;
    });
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }


}
