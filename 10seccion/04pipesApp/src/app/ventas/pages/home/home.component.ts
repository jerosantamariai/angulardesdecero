import { Component, OnInit } from '@angular/core';

import data from '../../../_files/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
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
