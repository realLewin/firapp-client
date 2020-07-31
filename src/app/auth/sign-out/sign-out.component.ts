import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingDialogComponent } from 'src/app/components/loading-dialog/loading-dialog.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  template: ``,
})
export class SignOutComponent implements OnInit {
  dialogRef: MatDialogRef<LoadingDialogComponent>;

  constructor(
    private dialog: MatDialog,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth.signOut();
    this.openLoadingDialog();
    setTimeout(() => {
      this.dialogRef.close();
      this.router.navigate(['welcome']);
    }, 1000);
  }

  openLoadingDialog() {
    this.dialogRef = this.dialog.open(LoadingDialogComponent, {
      width: '200px',
      height: '200px',
      hasBackdrop: true,
      disableClose: true,
    });
  }
}
