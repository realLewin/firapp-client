import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WritePostRoutingModule } from './write-post-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    WritePostRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class WritePostModule {}
