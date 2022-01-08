import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
})

export class HeroeComponent {

    nombre  :string = 'IronMan';
    edad    :number = 40;


    obtenerNombre():string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    //PODEMOS HACER DE ESTA FORMA LA FUNCION PARA CAPITALIZAR EL NOMBRE...
    // capitalizado():string {
    //     return this.nombre.toUpperCase();
    // }

    //...PERO PUEDO USAR ESTE METODO TAMBIEN, CON LA DIFERENCIA QUE NO DEBO LLAMARLO COMO FUNCION EN EL HTML
    get capitalizado() {
        return this.nombre.toUpperCase();
    }


}