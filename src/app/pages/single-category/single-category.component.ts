import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ICategory } from 'src/app/models/category.interface';
import { IPost } from 'src/app/models/post.interface';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'blog-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {
  categories: ICategory[] = [];
  posts: IPost[] = [];
  categoryName: string = '';

  constructor(
    private _categoryService: CategoryService,
    private _postService: PostService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this._categoryService.getAll(0).subscribe((data: ICategory[]) => {
      this.categories = data;
    });

    this._activatedRoute.queryParams
      .pipe(
        switchMap(query => {
          this.categoryName = query['name'];
          return this._postService.getPostByCategory(query['name'])
        })
      )
      .subscribe((posts: any) => {
        this.posts = posts.filter((p: IPost) => {
          for (let i = 0; i < p.categories.length; i++) {
            if (p.categories[i].name === this.categoryName) {
              return true;
            }
          }
          return false;
        });
      });
  }
}
