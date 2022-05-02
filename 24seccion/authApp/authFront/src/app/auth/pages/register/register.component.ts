import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: [ '', [ Validators.required ]],
    email: [ '', [ Validators.required, Validators.email ]],
    password: [ '', [ Validators.required, Validators.minLength(6) ]]
  })

  constructor( private fb: FormBuilder,
               private router: Router ) { }

  register() {
    this.router.navigateByUrl('/dashboard');
  }

  
}
