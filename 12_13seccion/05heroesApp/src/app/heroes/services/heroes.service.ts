import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Heroe } from '../interfaces/heroes.interface';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // private baseURL: string = environment.baseURL;

  constructor( private http: HttpClient ) {
   
  }

  getHeroes(): Observable<Heroe[]> {
      return this.http.get<Heroe[]>(`http://localhost:3000/heroes`)
  }

  getHeroeoPorId( id: string ): Observable<Heroe> {
    return this.http.get<Heroe>(`http://localhost:3000/heroes/${ id }`);

  }
}
