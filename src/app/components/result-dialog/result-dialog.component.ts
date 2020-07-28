import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Result } from 'src/app/core/models/sign-up-result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css'],
})
export class ResultDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Result,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleClick() {
    this.dialogRef.close();
    this.router.navigate(['/home']);
  }
}
