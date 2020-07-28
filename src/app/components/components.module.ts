import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';

@NgModule({
  declarations: [LoadingDialogComponent, ResultDialogComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  entryComponents: [LoadingDialogComponent, ResultDialogComponent],
})
export class ComponentsModule {}
