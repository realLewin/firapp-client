import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class WelcomeModule {}
