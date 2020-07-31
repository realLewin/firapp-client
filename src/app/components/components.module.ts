import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { PostCardComponent } from './post-card/post-card.component';

@NgModule({
  declarations: [
    LoadingDialogComponent,
    ResultDialogComponent,
    PostCardComponent,
  ],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [PostCardComponent],
  entryComponents: [LoadingDialogComponent, ResultDialogComponent],
})
export class ComponentsModule {}
