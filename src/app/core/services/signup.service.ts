import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { SignupAccountService } from '../services/signup-account.service';
import { SignupInfoService } from '../services/signup-info.service';
import { Info } from '../models/info';

@Injectable({
  providedIn: 'root',
})
export class SignupService implements OnInit {
  isSubmit: boolean = false;
  personalInfo: Info[] = [];
  accountInfo: Info[] = [];
  signupInfo: Info[] = [];

  constructor(
    private auth: AngularFireAuth,
    private _signupInfo: SignupInfoService,
    private _signupAccount: SignupAccountService
  ) {}

  ngOnInit() {}

  addFormData() {
    if (!this.isSubmit) {
      this._signupInfo.getInfo().subscribe((m) => (this.personalInfo = m));
      this._signupAccount.getInfo().subscribe((m) => (this.accountInfo = m));
      this.signupInfo.push(...this.personalInfo);
      this.signupInfo.push(...this.accountInfo);
      this.isSubmit = true;
    }
  }

  getAllInfo(): Observable<Info[]> {
    return of(this.signupInfo);
  }
  processSignup(): Observable<boolean> {
    try {
      // const userCredential =
      this.auth.createUserWithEmailAndPassword(
        this.signupInfo.find((e) => e.name === 'email').value,
        this.signupInfo.find((e) => e.name === 'password').value
      );
      return of(true);
      // userCredential
      //   .then((value) => {
      //     console.log('signup success');
      //     return of(true);
      //   })
      //   .catch((reason) => {
      //     console.log(`rejected because ${reason}`);
      //     return of(false);
      //   });
    } catch (error) {
      console.log(error);
      return of(false);
    }
  }
}
