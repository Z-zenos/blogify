import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, Query, QueryConstraint, collection, collectionData, doc, endBefore, getCountFromServer, getDocs, limit, limitToLast, orderBy, query, startAfter, startAt, updateDoc, where } from '@angular/fire/firestore';
import { Observable, firstValueFrom, map } from 'rxjs';
import { IPost } from '../models/post.interface';

import * as fuzzysort from 'fuzzysort'

declare const responsiveVoice: any;

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
    return collectionData(appQuery, {idField: 'id'}) as Observable<IPost[]>;
  }

  getPostByCategory(name: string) {
    return collectionData(this._posts, {
      idField: 'id'
    }) as Observable<IPost[]>;
  }

  audioMessage!: SpeechSynthesisUtterance;

  readingPost(content: string) {
    responsiveVoice.speak(content);
  }

  playPost() {
    responsiveVoice.isPlaying() ? responsiveVoice.pause() : responsiveVoice.resume();
  }

  getRelatedPost(title: string): Observable<IPost[]> {
    return (collectionData(this._posts, {
      idField: 'id'
    }) as Observable<IPost[]>)
      .pipe(
        map(data => {
          const words = title.split(' ');
          const titleList: string[] = data.map(p => p.title);
          const res: any[] = [];
          words.forEach(w => {
            res.push(...fuzzysort.go(w, titleList));
          });
          const relatedSet = [...new Set(res)].map(r => r.target);
          const filteredList = data.filter(p => relatedSet.includes(p.title));
          return filteredList.slice(0, 4);
        })
      );
  }

  async increaseViewPost(id: string | undefined, currentView: number) {
    console.log("Increased");
    const postDocRef = doc(this._firestore, `posts/${id}`);
    await updateDoc(postDocRef, { view: currentView + 1 });
  }
}
