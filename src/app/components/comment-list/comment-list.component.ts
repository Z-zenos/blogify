import { Component, Input, OnInit } from '@angular/core';
import { ActiveCommentInterface } from 'src/app/models/activeComment.interface';
import { CommentInterface } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'blog-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input() currentUserId: string | undefined;

  comments: CommentInterface[] = [];
  activeComment: ActiveCommentInterface | null = null;

  constructor(private _commentService: CommentService) { }

  ngOnInit(): void {
    this._commentService.getComments().subscribe((comments: CommentInterface[]) => {
      this.comments = comments;
    });
  }

  getCurrentUsername(): string {
    return this.comments.find(c => c.userId === this.currentUserId)?.username ?? 'zenos';
  }

  addComment({
    text,
    parentId
  }: {
    text: string,
    parentId: string | null
  }): void {
    this._commentService
      .createComment(text, parentId)
      .subscribe((createdComment) => {
        this.comments = [...this.comments, createdComment];
        this.activeComment = null;
      });
  }

  // Get replies of each comment based on parent ID
  getReplies(commentId: string): CommentInterface[] {
    return this.comments
      .filter((comment) => comment.parentId === commentId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }

  // Invoking when click into reply or edit button of specific comment 
  setActiveComment(activeComment: ActiveCommentInterface | null): void {
    this.activeComment = activeComment;
    // activeComment includes: commentID and state('replying' | 'editting')
  }

  updateComment({
    text,
    commentId,
  }: {
    text: string;
    commentId: string;
  }): void {
    this._commentService
      .updateComment(commentId, text)
      .subscribe((updatedComment) => {
        this.comments = this.comments.map((comment) => {
          if (comment.id === commentId) {
            return updatedComment;
          }
          return comment;
        });

        this.activeComment = null;
      });
  }

  deleteComment(commentId: string): void {
    this._commentService.deleteComment(commentId).subscribe(() => {
      this.comments = this.comments.filter(
        (comment) => comment.id !== commentId
      );
    });
  }

}
