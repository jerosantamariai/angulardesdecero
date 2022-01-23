import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'getYourOwn';
  private baseURL: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }

  buscarGifs(query: string) {

    // Aqui exigimos que la busqueda sea con minusculas, para bloquear la repetición por tipo de letra
    query = query.trim().toLowerCase();

    // Si no le colocamos la condición, permitimos repetición de valores, mientras que con la condicional NO
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);

      // Con la siguiente linea de comandos pedimos que el array se mantenga con un largo de 10
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }


    // Con la siguiente linea de comando nosotros trabajamos la URL con la que estamos trabajando
    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query);
          
    this.http.get<SearchGifsResponse>(`${ this.baseURL }/search`, { params } )
      .subscribe((resp) => {

        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));

      })

    console.log(this._historial);
  }
}
