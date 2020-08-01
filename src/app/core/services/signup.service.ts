import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { SignupAccountService } from '../services/signup-account.service';
import { SignupInfoService } from '../services/signup-info.service';
import { Info } from '../models/info';
import { HttpClient } from '@angular/common/http';
import { config } from 'src/assets/config';

@Injectable({
  providedIn: 'root',
})
export class SignupService implements OnInit {
  personalInfo: Info[] = [];
  accountInfo: Info[] = [];
  signupInfo: Info[] = [];
  userMetadataUrl: string = config.server.userMetadataUrl;
  sub: Subject<Promise<any>> = new Subject<Promise<any>>();

  constructor(
    private auth: AngularFireAuth,
    private _signupInfo: SignupInfoService,
    private _signupAccount: SignupAccountService,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  addFormData() {
    // Clean privous data;
    this.signupInfo = [];
    this.personalInfo = [];
    this.accountInfo = [];

    this.personalInfo = this._signupInfo.getInfo();
    this.signupInfo.push(...this.personalInfo);

    this.accountInfo = this._signupAccount.getInfo();
    this.signupInfo.push(...this.accountInfo);
    // this._signupInfo.getInfo().subscribe((m) => {
    //   this.personalInfo = m;
    //   this.signupInfo.push(...this.personalInfo);
    // });
    // this._signupAccount.getInfo().subscribe((m) => {
    //   this.accountInfo = m;
    //   this.signupInfo.push(...this.accountInfo);
    // });
  }

  // getAllInfo(): Observable<Info[]> {
  //   return of(this.signupInfo);
  // }
  getAllInfo() {
    return this.signupInfo;
  }
  processSignup() {
    let userCredential;
    this.signupUserMetadata().subscribe(
      (res) => {
        if (res === 'failed') {
          // Handle the database insert error;
          this.sub.next(null);
        } else {
          // When insert successful, sign up;
          try {
            userCredential = this.auth.createUserWithEmailAndPassword(
              this.signupInfo.find((e) => e.name === 'email').value,
              this.signupInfo.find((e) => e.name === 'password').value
            );
          } catch (err) {
            console.log(err);
          }
          this.sub.next(userCredential);
        }
      },
      (err) => {
        this.sub.next(null);
        console.log(err);
      }
    );
  }
  signupUserMetadata() {
    let metadata = [...this.personalInfo];
    metadata.unshift({
      name: 'email',
      value: this.accountInfo.find((e) => e.name === 'email').value,
    });
    return this.http.post(`${this.userMetadataUrl}post`, metadata);
  }
}
