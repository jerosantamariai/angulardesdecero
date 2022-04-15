import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPattern } from 'src/app/shared/validator/validaciones';
import { camposIguales } from '../../../shared/validator/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // ESTO FUE FACTORIZADO A LA CARPETA DE SHARED EN VALIDACIONES
  // nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  // emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario: FormGroup = this.fb.group({
    // ASI SE VEIA SIN FACTORIZAR LAS VALIDACIONES
    // nombre: [ '', [ Validators.required, Validators.pattern( this.nombreApellidoPattern ) ]],
    // email: [ '', [ Validators.required, Validators.pattern( this.emailPattern ) ]],
    nombre: [ '', [ Validators.required, Validators.pattern( nombreApellidoPattern ) ]],
    email: [ '', [ Validators.required, Validators.pattern( emailPattern ) ]],
    username: [ '', [ Validators.required ]],
    password: [ '', [ Validators.required, Validators.minLength(6) ]],
    password2: [ '', [ Validators.required ]],
  }, {
    Validators: [
      camposIguales('password', 'password2'),
    ]
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoValido( campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  enviarFormulario() {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
