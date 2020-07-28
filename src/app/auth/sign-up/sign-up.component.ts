import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  isMulti: boolean = false;
  isDisabled: boolean = true;

  controlPanelTwo(event) {
    this.isDisabled = !event;
    console.log('works!');
  }
}
