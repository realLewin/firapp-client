import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SettingsRoutingModule } from './settings-routing.module';
import { AccountComponent } from './account/account.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AccountComponent, MainComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class SettingsModule {}
