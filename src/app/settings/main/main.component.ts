import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  userId: string = '@Lewin7777777';
  userSettings: string[] = [
    'Account',
    'Privacy',
    'Safety',
    'Notification',
    'Preference',
  ];
  generalSettings: string[] = ['Display', 'Data', 'Accessibility', 'About'];
  constructor() {}

  ngOnInit(): void {}

  goBack() {}
}
