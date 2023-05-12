import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';
import { Firestore, collectionData, limit, query, where } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly _categories: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this._categories = collection(this.firestore, 'categories');
  }

  getAll(numCtgr: number) {
    const appQuery = numCtgr ? query(this._categories, limit(numCtgr)) : this._categories;
    return collectionData(appQuery, {
      idField: 'id'
    }) as Observable<ICategory[]>;
  }

  get(name: string) {
    const appQuery = query(this._categories, where('name', '==', name));
    return collectionData(appQuery) as Observable<ICategory[]>;
  }
}
