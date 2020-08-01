import { Injectable } from '@angular/core';
import { Info } from '../models/info';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupAccountService {
  accountInfo: Info[] = [];

  constructor() {}

  addInfo(info: Info[]) {
    this.accountInfo = [];
    this.accountInfo.push(...info);
  }
  // getInfo(): Observable<Info[]> {
  //   return of(this.accountInfo);
  // }
  getInfo() {
    return this.accountInfo;
  }
}
