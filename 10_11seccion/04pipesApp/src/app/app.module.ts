import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modulos Personales
import { AppRouteModule } from './routes/app-route/app-route.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el Locale de la App
import localeCHI from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common'

registerLocaleData( localeCHI );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouteModule,
    PrimeNgModule,
    SharedModule,
    VentasModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-CL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
