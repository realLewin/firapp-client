import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  username: string = '@lewin7777777';
  isShowName: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
