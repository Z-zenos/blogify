import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category.interface';
import { IPost } from 'src/app/models/post.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'blog-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post?: IPost;
  @Input() simple = false;
  @Input() twoColumn = false;
  @Input() horizontal = false;

  tags: ICategory[] = [];

  constructor(
    private _categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this._categoryService.getAll(0).subscribe((data: ICategory[]) => {
      this.tags = data;
    });
    console.log(this.post);
  }

  getColorByOfTag(tagName: string) {
    return this.tags.find(t => t.name === tagName)?.color ?? '';
  }

}
