import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, Query, QueryConstraint, collection, collectionData, endBefore, getCountFromServer, getDocs, limit, limitToLast, orderBy, query, startAfter, startAt, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IPost } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly _posts: CollectionReference<DocumentData>;

  constructor(
    private _firestore: Firestore
  ) {
    this._posts = collection(this._firestore, 'posts');
  }

  async getAll(option?: any) {
    // List of query to database
    const queryList: QueryConstraint[] = [orderBy("title"), startAt(0), limit(7)];

    // Main query
    let appQuery: Query<DocumentData>;

    if (option) {
      if (option.orderBy)
        queryList[0] = orderBy(option.orderBy, ["title", "created_at"].includes(option.orderBy) ? "asc" : 'desc');

      if (option.paginate) {
        const doc = await getDocs(query(this._posts, where("title", "==", option.title)));
        const lastVisible = doc.docs[0];

        if (option.paginate === 'next') {
          queryList[1] = startAfter(lastVisible);
        }
        else {
          queryList[1] = endBefore(lastVisible);
          queryList[2] = limitToLast(7);
        }
      }
    }

    appQuery = query(this._posts, ...queryList);

    return collectionData(appQuery, {
      idField: 'id'
    }) as Observable<IPost[]>;
  }

  getPostsByFeatured() {
    const queryList: QueryConstraint[] = [where("isFeatured", "==", true), limit(4)];
    let appQuery: Query<DocumentData>;

    appQuery = query(this._posts, ...queryList);

    return collectionData(appQuery, {
      idField: 'id'
    }) as Observable<IPost[]>;
  }

  async totalPosts() {
    const coll = collection(this._firestore, "posts");
    const snapshot = await getCountFromServer(coll);
    return snapshot.data().count;
  }

  getPostByTitle(title: string) {
    const appQuery = query(this._posts, where('title', '==', title));
    return collectionData(appQuery) as Observable<IPost[]>;
  }

  getPostByPermalink(permalink: string) {
    const appQuery = query(this._posts, where('permalink', '==', permalink));
    return collectionData(appQuery) as Observable<IPost[]>;
  }

  getPostByCategory(name: string) {
    return collectionData(this._posts, {
      idField: 'id'
    }) as Observable<IPost[]>;
  }

  audioMessage!: SpeechSynthesisUtterance;

  readingPost(content: string) {
    if ("speechSynthesis" in window) {
      this.audioMessage = new SpeechSynthesisUtterance();
    } else {
      alert("Speech Synthese is not supported");
    }
    this.audioMessage.text = content;
    window.speechSynthesis.speak(this.audioMessage);
  }

  playPost(isPlay: boolean) {
    isPlay ? window.speechSynthesis.pause() : window.speechSynthesis.resume();
  }

}
