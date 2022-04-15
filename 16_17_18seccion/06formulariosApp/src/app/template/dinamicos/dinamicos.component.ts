import { Component, OnInit } from '@angular/core';

interface Persona {
  name: string;
  favorite: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  agregarFavorite: string = '';

  persona: Persona = {
    name: 'Jero',
    favorite: [
      { id: 1, name: 'Last of Us' },
      { id: 2, name: 'Uncharted' },
      { id: 3, name: 'Assassins Creed' },
      { id: 4, name: 'Death Space' },
    ]
  }
  
  agregarNuevo(){

    const nuevoFavorite: Favorite = {
      id: this.persona.favorite.length + 1,
      name: this.agregarFavorite
    }

    this.persona.favorite.push( nuevoFavorite );
    this.agregarFavorite = '';
  }
  
  eliminar( index: number ) {
    this.persona.favorite.splice( index, 1 );
  }

  guardar() {
    console.log("Guardado!")
  }


}
