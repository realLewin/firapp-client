import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ComponentsModule } from 'src/app/components/components.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { MainComponent } from './main/main.component';
import { SignUpInfoComponent } from './sign-up-info/sign-up-info.component';
import { SignUpAccountComponent } from './sign-up-account/sign-up-account.component';
import { StepperFormComponent } from './stepper-form/stepper-form.component';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    SignOutComponent,
    MainComponent,
    SignUpInfoComponent,
    SignUpAccountComponent,
    StepperFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [],
})
export class AuthModule {}
