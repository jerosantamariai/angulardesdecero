import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../ventas/pages/home/home.component';
import { BasicosComponent } from '../../ventas/pages/basicos/basicos.component';
import { NumerosComponent } from '../../ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from '../../ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from '../../ventas/pages/ordenar/ordenar.component';

const routes: Routes = [
   {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'basicos',
    component: BasicosComponent
  },
  {
    path: 'numeros',
    component: NumerosComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes
    )
  ]
})

export class AppRouteModule { }
