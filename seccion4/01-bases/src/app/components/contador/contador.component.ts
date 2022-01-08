import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})

export class ContadorComponent {
    public titulo: string = 'Contador App';

    numero  : number = 0;
    base    : number = 5;
  
    // restar() {
    //   this.numero -= 1;
    // }
  
    // sumar() {
    //   this.numero += 1;
    // }
  
    acumular( valor:number ) {
      this.numero += valor;
    }
  
    acumularCinco( valor:number ) {
      this.numero += valor;
    }
  
}