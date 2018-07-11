import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './app.CounterComponent';
import { CounterValueComponenets } from './app.CounterValueComponenets';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterValueComponenets
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
