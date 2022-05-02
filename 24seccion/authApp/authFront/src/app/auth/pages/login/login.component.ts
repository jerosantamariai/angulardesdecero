import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email: [ 'jero@jero.cl', [ Validators.required, Validators.email ]],
    password: [ '123456', [ Validators.required, Validators.minLength(6) ]]
  })

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService ) { }

  login() {

    const { email, password } = this.miFormulario.value;

    console.log(email, password);

    this.authService.login( email, password )
      .subscribe( resp => {
        console.log(resp);
      });

    // this.router.navigateByUrl('/dashboard');
  }

}
