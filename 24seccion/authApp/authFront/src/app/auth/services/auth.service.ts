import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { AuthResponse, Usuario } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario};
  }

  constructor( private http: HttpClient) { }

  login( email: string, password: string ) {
    
    const url = `${ this.baseUrl }/auth/login`;
    const body = { email, password };
    
    return this.http.post<AuthResponse>(url, body)

  }

}
