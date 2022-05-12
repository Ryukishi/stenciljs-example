import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from 'angular-workspace';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    MyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
