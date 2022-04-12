import { Component, OnInit } from '@angular/core';
import { FormBuilder, 
  // FormControl, 
  FormGroup, 
  Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // Usado para cuando no usamos FormBuilder
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(2345),
  //   cantidad: new FormControl(8)
  // });

  // Usando FormBuilder
  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [ Validators.required, Validators.minLength(3) ] ],
    precio: [ , [ Validators.required, Validators.min(0) ] ],
    cantidad: [ , [ Validators.required, Validators.min(0) ] ]
  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  campoValido( campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar() {
    console.log(this.miFormulario)
  }

}
