import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from 'src/app/core/models/gender';
import { GenderOption } from 'src/app/core/data/gender-options';
import { Info } from 'src/app/core/models/info';
import { SignupInfoService } from 'src/app/core/services/signup-info.service';

@Component({
  selector: 'app-sign-up-info',
  templateUrl: './sign-up-info.component.html',
  styleUrls: ['./sign-up-info.component.css'],
})
export class SignUpInfoComponent implements OnInit {
  //contain the form infomation
  formInfo: Info[] = [];
  //process birthday date object
  birthdayString: string = '';
  //emit event to control parent panel two status
  @Output()
  onFormOneSubmitEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  //mat-select option content
  genderOption: Gender[] = GenderOption;
  //the form group
  infoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _signupInfo: SignupInfoService
  ) {}

  ngOnInit(): void {
    //form init
    this.infoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      birthday: ['', Validators.required],
      bio: [''],
    });
  }

  //control parent's panel two status
  open() {
    this.onFormOneSubmitEvent.emit(true);
  }

  //form submit
  submitForm() {
    this.processForm();
    this._signupInfo.addInfo(this.formInfo);
    //for test purpose
    console.log('form one submitted!');
    console.log(this._signupInfo.getInfo());
  }

  //convert form info to Info type
  processForm() {
    this.formInfo = [];
    //push the infoForm's info to the variable
    this.formInfo.push({
      name: 'firstName',
      value: this.infoForm.get('firstName').value,
    });
    this.formInfo.push({
      name: 'lastName',
      value: this.infoForm.get('lastName').value,
    });
    this.formInfo.push({
      name: 'gender',
      value: this.infoForm.get('gender').value,
    });
    const birthday: Date = this.infoForm.get('birthday').value;
    //manipulate the Date object of birthday to string:
    this.birthdayString = ''.concat(
      (birthday.getMonth() + 1).toString(),
      '/',
      birthday.getDay().toString(),
      '/',
      birthday.getFullYear().toString()
    );
    this.formInfo.push({ name: 'birthday', value: this.birthdayString });
    this.formInfo.push({ name: 'bio', value: this.infoForm.get('bio').value });
  }
}

//the birthday format: Tue Jun 16 2020 00:00:00 GMT-0400 (Eastern Daylight Time)
// console.log(`\t
//   first name: ${this.infoForm.get('firstName').value}\n\t
//   last name: ${this.infoForm.get('lastName').value}\n\t
//   gender: ${this.infoForm.get('gender').value}\n\t
//   birthday: ${this.infoForm.get('birthday').value}\n\t
//   bio: ${this.infoForm.get('bio').value}`);
// console.log(typeof this.infoForm.get('firstName').value);
// console.log(typeof this.infoForm.get('lastName').value);
// console.log(typeof this.infoForm.get('gender').value); //number
// console.log(typeof this.infoForm.get('birthday').value); //object
// console.log(typeof this.infoForm.get('bio').value);
// const birthday: Date = this.infoForm.get('birthday').value;
// console.log(birthday.getFullYear());
// console.log(typeof birthday.getFullYear()); //number
// console.log(birthday.getMonth());
// console.log(typeof birthday.getMonth()); //number
// console.log(birthday.getDay());
// console.log(typeof birthday.getDay()); //number
