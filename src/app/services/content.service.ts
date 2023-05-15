import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private _headingList = new BehaviorSubject<HTMLHeadingElement[]>([]);
  readonly headingList$ = this._headingList.asObservable();

  private headingList: HTMLHeadingElement[] = [];

  constructor() { }

  // getAllHeadingList() {
  //   this.headingList = [];
  //   this._headingList.next(this.headingList);
  // }

  createHeadingList(hl: HTMLHeadingElement[]) {
    this.headingList = hl;
    this._headingList.next(this.headingList);
  }
}
