import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { HeroeComponent } from './components/heroes/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
