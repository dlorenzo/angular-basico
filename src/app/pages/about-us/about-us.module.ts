import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { MdListModule, MdIconModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    MdListModule,
    MdIconModule
  ],
  declarations: [AboutUsComponent],
  exports: [AboutUsComponent]
})
export class AboutUsModule { }
