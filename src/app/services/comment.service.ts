import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentInterface } from '../models/comment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _httpClient: HttpClient) { }

  /** 
   - Requesting a typed response
    Structure your HttpClient request to declare the type of the response object, to make consuming the output easier and more obvious. 
    Specifying the response type acts as a type assertion at compile time.

    Specifying the response type is a declaration to TypeScript that it should treat your response as being of the given type. 
    This is a build-time check and doesn't guarantee that the server actually responds with an object of this type. 
    It is up to the server to ensure that the type specified by the server API is returned.

    To specify the response object type, first define an interface with the required properties. 
    Use an interface rather than a class, because the response is a plain object that cannot be 
    automatically converted to an instance of a class.
          
    export interface Config {
      heroesUrl: string;
      textfile: string;
      date: any;
    }
    Next, specify that interface as the HttpClient.get() call's type parameter in the service.
       
    getConfig() {
      // now returns an Observable of Config
      return this.http.get<Config>(this.configUrl);
    }

    When you pass an interface as a type parameter to the HttpClient.get() method, use the RxJS map operator 
    to transform the response data as needed by the UI. You can then pass the transformed data to the async pipe.

    The callback in the updated component method receives a typed data object, which is easier and safer to consume:
    config: Config | undefined;

    showConfig() {
      this.configService.getConfig()
        // clone the data object, using its known Config shape
        .subscribe((data: Config) => this.config = { ...data });
    }

    To access properties that are defined in an interface, you must explicitly convert the plain object you 
    get from the JSON to the required response type. For example, the following subscribe callback receives data 
    as an Object, and then type-casts it in order to access the properties.
          
    .subscribe(data => this.config = {
      heroesUrl: (data as any).heroesUrl,
      textfile:  (data as any).textfile,
    });
  */

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

  deleteComment(id: string): Observable<{}> {
    return this._httpClient.delete(`http://localhost:3000/comments/${id}`);
  }
}
