import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPattern } from 'src/app/shared/validator/validaciones';
import { camposIguales } from '../../../shared/validator/validaciones';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

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
    email: [ '', [ Validators.required, Validators.pattern( emailPattern ) ], [ this.emailValidator ]],
    username: [ '', [ Validators.required ]],
    password: [ '', [ Validators.required, Validators.minLength(6) ]],
    password2: [ '', [ Validators.required ]],
  }, {
    Validators: [
      camposIguales('password', 'password2'),
    ]
  })

  // emailErrorMsg: string = '';

  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;

    if ( errors?.['required'] ) {
      return 'correo obligatorio';
    } else if ( errors?.['pattern'] ) {
      return 'No es un correo';
    } else if ( errors?.['emailTomado'] ) {
      return 'El correo esta en uso';
    }

    return '';

  }


  constructor( private fb: FormBuilder,
               private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
  }

  campoValido( campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  // ESTAS VALIDACIONES FUERON OPTIMIZADAS
  // emailRequired() {
  //   return this.miFormulario.get('email')?.errors?.['required'] && this.miFormulario.get('email')?.touched;
  // }

  // emailFormato() {
  //   return this.miFormulario.get('email')?.errors?.['pattern'] && this.miFormulario.get('email')?.touched;
  // }

  // emailTomado() {
  //   return this.miFormulario.get('email')?.errors?.['emailTomado'] && this.miFormulario.get('email')?.touched;
  // }

  enviarFormulario() {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
