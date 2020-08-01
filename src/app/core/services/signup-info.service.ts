import { Injectable } from '@angular/core';
import { Info } from '../models/info';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupInfoService {
  userInfo: Info[] = [];

  constructor() {}

  addInfo(info: Info[]) {
    this.userInfo = [];
    this.userInfo.push(...info);
  }
  // getInfo(): Observable<Info[]> {
  //   return of(this.userInfo);
  // }
  getInfo() {
    return this.userInfo;
  }
}
