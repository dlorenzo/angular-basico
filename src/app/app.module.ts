import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './pages/home/home.module';
import { AboutUsModule } from './pages/about-us/about-us.module';
import { MensajeroService } from './mensajero.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  providers: [MensajeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
