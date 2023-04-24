import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActiveCommentTypeEnum } from 'src/app/models/activeComment.enum';
import { ActiveCommentInterface } from 'src/app/models/activeComment.interface';
import { CommentInterface } from 'src/app/models/comment.model';

@Component({
  selector: 'blog-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment!: CommentInterface;
  @Input() currentUserId!: string | undefined;
  @Input() replies!: CommentInterface[];
  @Input() activeComment!: ActiveCommentInterface | null;
  @Input() parentId!: string | null;

  replyId: string | null = null;

  @Output() setActiveComment = new EventEmitter<ActiveCommentInterface | null>();
  @Output() addComment = new EventEmitter<{ text: string, parentId: string | null }>();
  @Output() updateComment = new EventEmitter<{ text: string, commentId: string }>();

  activeCommentType = ActiveCommentTypeEnum;
  createdAt: string = '';
  canReply: boolean = false;
  canEdit: boolean = false;
  canDelete: boolean = false;


  constructor() { }

  ngOnInit(): void {
    const fiveMinutes = 300000;
    const timePassed = new Date().getMilliseconds() - new Date(this.comment.createdAt).getMilliseconds() > fiveMinutes;
    this.canReply = Boolean(this.currentUserId);
    this.canEdit = this.currentUserId === this.comment.userId && !timePassed;
    this.canDelete = this.currentUserId === this.comment.userId && this.replies.length === 0 && !timePassed;
    this.replyId = this.parentId ? this.parentId : this.comment.id;
  }

  isReplying(): boolean {
    if (!this.activeComment) {
      return false;
    }

    return (
      this.activeComment?.id === this.comment.id && this.activeComment?.type === this.activeCommentType.replying
    );
  }

  isEdditing(): boolean {
    if (!this.activeComment) {
      return false;
    }

    return (
      this.activeComment?.id === this.comment.id && this.activeComment?.type === this.activeCommentType.editing
    );
  }



}
