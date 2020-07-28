import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingDialogComponent } from 'src/app/components/loading-dialog/loading-dialog.component';

@Component({
  selector: 'app-sign-out',
  template: ``,
})
export class SignOutComponent implements OnInit {
  dialogRef: MatDialogRef<LoadingDialogComponent>;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.openLoadingDialog();
    setTimeout(() => {
      this.dialogRef.close();
    }, 3000);
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
