import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Info } from 'src/app/core/models/info';
import { SignupAccountService } from 'src/app/core/services/signup-account.service';
import { SignupService } from 'src/app/core/services/signup.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingDialogComponent } from 'src/app/components/loading-dialog/loading-dialog.component';
import { Router } from '@angular/router';
import { ResultDialogComponent } from 'src/app/components/result-dialog/result-dialog.component';
import { Result } from 'src/app/core/models/sign-up-result';

@Component({
  selector: 'app-sign-up-account',
  templateUrl: './sign-up-account.component.html',
  styleUrls: ['./sign-up-account.component.css'],
})
export class SignUpAccountComponent implements OnInit {
  //form group
  accountForm: FormGroup;
  //set the password visibility
  isShowPass: boolean = false;
  //store the form info
  formInfo: Info[] = [];
  //the sign up status
  // isSuccess: Observable<boolean> = of(false);
  isSuccess: boolean;
  dialogRef: MatDialogRef<any>;
  resultDialogRef: MatDialogRef<any>;
  signupResult: Result = {
    isSuccess: false,
    success: 'Success',
    failed: 'Failed',
  };

  constructor(
    private fb: FormBuilder,
    private _signupAccount: SignupAccountService,
    private _signup: SignupService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.minLength(10)],
    });
  }
  submitForm() {
    //convert form data to uniform
    this.processFormData();
    //diliver form data to service
    this._signupAccount.addInfo(this.formInfo);
    console.log('form two submitted!');
    this._signup.addFormData();
    this.openDialog();
    const ob = this._signup.processSignup();
    ob.subscribe((m) => {
      this.signupResult.isSuccess = m;
      setTimeout(() => {
        this.dialogRef.close();
      }, 1000);
    });
  }
  processFormData() {
    this.formInfo.push({
      name: 'email',
      value: this.accountForm.get('email').value,
    });
    this.formInfo.push({
      name: 'password',
      value: this.accountForm.get('password').value,
    });
  }
  //first dialog to wait for sign up process
  openDialog() {
    this.dialogRef = this.dialog.open(LoadingDialogComponent, {
      width: '200px',
      height: '200px',
      hasBackdrop: true,
      disableClose: true,
    });
    //after succeed sign up, open the result dialog
    this.dialogRef.afterClosed().subscribe((m) =>
      setTimeout(() => {
        this.openResultDialog();
      }, 500)
    );
  }
  //open the result dialog
  openResultDialog() {
    this.resultDialogRef = this.dialog.open(ResultDialogComponent, {
      width: '400px',
      height: '400px',
      hasBackdrop: true,
      data: this.signupResult,
    });
  }
}
