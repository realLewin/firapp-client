import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Info } from '../models/info';
import { Observable, of } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginInformation: Info[] = [];
  user: User;
  constructor(private auth: AngularFireAuth) {}

  addInfo(info: Info[]) {
    this.loginInformation = info;
  }

  login(): Observable<boolean> {
    try {
      //login
      const loginResult = this.auth.signInWithEmailAndPassword(
        this.loginInformation.find((m) => m.name === 'account').value,
        this.loginInformation.find((m) => m.name === 'password').value
      );
      //get logged in user information
      loginResult.then(
        (value) => (this.user = value.user),
        (reason) => console.log(reason)
      );
      return of(true);
    } catch (err) {
      console.log(err);
      return of(false);
    }
  }
}
