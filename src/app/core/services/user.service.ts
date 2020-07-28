import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: firebase.User;
  isLogin: boolean = false;
  error: any;

  constructor(private auth: AngularFireAuth) {}

  async checkLogin(): Promise<boolean> {
    await this.auth.currentUser
      .then((user) => {
        this.user = user;
        this.isLogin = true;
      })
      .catch((err) => {
        this.error = err;
        this.isLogin = false;
      });
    return this.isLogin;
  }
}
