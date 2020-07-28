import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';

@NgModule({
  declarations: [SignUpComponent, SignInComponent, SignOutComponent],
  imports: [CommonModule, MaterialModule, ComponentsModule],
  exports: [],
})
export class AuthModule {}
