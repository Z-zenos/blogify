import { NgModule } from '@angular/core';
import { CommentComponent } from '../components/comment/comment.component';
import { CommentListComponent } from '../components/comment-list/comment-list.component';
import { CommentFormComponent } from 'src/app/forms/comment-form/comment-form.component';
import { CommentService } from 'src/app/services/comment.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CommentComponent, CommentListComponent, CommentFormComponent],
  exports: [CommentListComponent],
  providers: [CommentService]
})
export class CommentsModule { }