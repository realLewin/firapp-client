import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';

@NgModule({
  declarations: [LoadingDialogComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  entryComponents: [LoadingDialogComponent],
})
export class ComponentsModule {}
