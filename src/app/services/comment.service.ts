import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentInterface } from '../models/comment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _httpClient: HttpClient) { }

  getComments(): Observable<CommentInterface[]> {
    return this._httpClient.get<CommentInterface[]>('http://localhost:3000/comments');
  }

  createComment(text: string, parentId: string | null = null): Observable<CommentInterface> {
    return this._httpClient.post<CommentInterface>(
      'http://localhost:3000/comments',
      {
        body: text,
        parentId,

        /*
          The important thing here is that in real application we would 
          provide only body and parentId inside and backend will add 
          createdAt, userId, username on it's own. 
          We use a fake API here which won't return such fields 
          for us this is why we set there here.
        */
        // Should not be set here
        createdAt: new Date().toISOString(),
        userId: '1',
        username: 'John'
      }
    );
  }

  updateComment(id: string, text: string): Observable<CommentInterface> {
    return this._httpClient.patch<CommentInterface>(
      `http://localhost:3000/comments/${id}`,
      {
        body: text,
      }
    );
  }
}
