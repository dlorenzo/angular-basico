import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdMenuModule, MdButtonModule, MdIconModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { LayoutComponent } from './layout.component';
import { AboutUsModule } from '../pages/about-us/about-us.module';
import { HomeModule } from '../pages/home/home.module';
import { SaludarModule } from '../pages/saludar/saludar.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HomeModule,
    AboutUsModule,
    SaludarModule,
    MdMenuModule,
    MdButtonModule,
    BrowserAnimationsModule,
    MdIconModule,
    FormsModule,
    MdInputModule
  ],
  declarations: [NavComponent, ContentComponent, LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class LayoutModule { }
