import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
// import { AgregarComponent } from '../agregar/agregar.component';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  // personajes: Personaje[] = [];

  get personajes():Personaje[] {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {
    // this.personajes = this.dbzService.personajes;
  }

}

