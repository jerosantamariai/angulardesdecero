import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  nombre: string = 'Jero';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitado',
    'femenino': 'invitada'
  }

  clientes: string[] = ['Jero', 'Javi', 'Jorge', 'Pepe', 'Cristian', 'Trinidad', 'Maria Jose', 'Maria Paz']
  clientesMapa = {
    '=0': 'No tenemos a nadie en la cola',
    '=1': 'Tenemos a 1 persona en la cola',
    '=2': 'Tenemos a 2 personas en la cola',
    'other': 'Tenemos a # personas en la cola',
  }

  cambiarNombre() {
    this.nombre = 'Javiera',
    this.genero = 'femenino'
  }

  borrarCliente() {
    this.clientes.pop();
  }

}
