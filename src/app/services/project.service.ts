import { Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProject } from '../models/project.interfact';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly _project: CollectionReference<DocumentData>;

  constructor(private readonly _firestore: Firestore) {
    this._project = collection(this._firestore, 'projects');
  }

  getAll() {
    return collectionData(this._project, {
      idField: 'id'
    }) as Observable<IProject[]>;
  }
}
