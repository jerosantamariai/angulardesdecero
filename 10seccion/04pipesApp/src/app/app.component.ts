import { Component } from '@angular/core';

import data from './_files/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pipesApp';
  
  nombre: string = 'Fernando';
  public dataList: {
    name: string,
    lastname: string,
    country: string,
    age: number,
    phrase: string
  }[] = data;

  mostrarNombre() {
    console.log(this.nombre);
  }
}
