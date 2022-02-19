import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroesModule } from './components/heroes/heroes.modules';
import { ContadorModule } from './components/contador/contador.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
