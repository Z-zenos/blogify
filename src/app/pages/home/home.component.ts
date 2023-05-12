import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ICategory } from 'src/app/models/category.interface';
import { IPost } from 'src/app/models/post.interface';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredPosts: IPost[] = [];
  lastestPosts: IPost[] = [];
  categories: ICategory[] = [];

  constructor(
    private _postService: PostService,
    private _categoryService: CategoryService
  ) { }

  async ngOnInit() {
    this._postService.getPostsByFeatured().subscribe((data: IPost[]) => {
      this.featuredPosts = data;
      console.log("Featured post: ", this.featuredPosts);
    });

    this._categoryService.getAll(0).subscribe((data: ICategory[]) => {
      this.categories = data;
    })

    this.lastestPosts = await firstValueFrom(await this._postService.getAll({ orderBy: 'created_at' }));
    console.log("Lastest post: ", this.lastestPosts);

  }

}
