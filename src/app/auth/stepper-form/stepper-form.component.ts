import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Gender {
  id: number;
  value: string;
}

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css'],
})
export class StepperFormComponent implements OnInit {
  isLinear: boolean = true;
  isOptional: boolean = false;
  genderOption: Gender[] = [
    { id: 0, value: 'none' },
    { id: 1, value: 'boy' },
    { id: 2, value: 'girl' },
    { id: 3, value: 'bis' },
  ];
  emailForm: FormGroup;
  userDataForm: FormGroup;
  passwordForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['', Validators.required],
    });
    this.userDataForm = this.fb.group({
      username: ['', Validators.required],
      userGender: ['', Validators.required],
      userAvatar: ['', Validators.required],
      userBio: [''],
    });
    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
    });
  }
}
