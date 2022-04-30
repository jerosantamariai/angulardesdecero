import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', Validators.required ]
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  hayError( campo: string ): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

}
