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
    this.accountInfo = info;
  }
  getInfo(): Observable<Info[]> {
    return of(this.accountInfo);
  }
}
