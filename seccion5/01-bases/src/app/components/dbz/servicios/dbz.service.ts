import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()
export class DbzService {

    personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        },
        {
          nombre: 'Krillin',
          poder: 700
        },
      ]
      
    constructor() {
        console.log("corriendo");
    }
}