import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { MenuComponent } from '../shared/menu/menu.component';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDoblesComponent,
    DonaComponent,
    DonaHttpComponent,
    GraficaBarraComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule
  ]
})
export class GraficasModule { }
