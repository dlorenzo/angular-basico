import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SaludarComponent } from './saludar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SaludarComponent],
  exports: [SaludarComponent]
})
export class SaludarModule { }
