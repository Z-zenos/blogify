import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'blog-category-box',
  templateUrl: './category-box.component.html',
  styleUrls: ['./category-box.component.scss']
})
export class CategoryBoxComponent implements OnInit {

  categories: ICategory[] = [];

  constructor(private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this._categoryService.getAll(7).subscribe((categories: ICategory[]) => {
      this.categories = categories;
    });
  }


}
