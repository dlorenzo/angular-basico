import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdDialogModule, MdButtonModule, MdIconModule } from '@angular/material';

import { SaludarComponent } from './saludar.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdDialogModule
  ],
  declarations: [SaludarComponent, DialogComponent],
  exports: [SaludarComponent],
  entryComponents: [DialogComponent]
})
export class SaludarModule { }
