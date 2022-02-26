import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'jeronimo';
  nombreUpper: string = 'JERONIMO';
  nombreCompleto: string = 'jerOnimo sAnta marIa';

  fecha: Date = new Date();

}
