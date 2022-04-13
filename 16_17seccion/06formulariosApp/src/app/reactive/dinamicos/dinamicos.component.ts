import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Last of Us', Validators.required],
      ['Uncharted', Validators.required],
      ['Assassins Creed', Validators.required],
      ['Death Space', Validators.required],
    ], Validators.required)
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    } else {
      // Ambos script funcionan de igual forma, en el video se utiliza el comentado debido a que FH prefiere usar el
      // FB que ya lo tiene operativo. Ojo que con esto, se puede modificar el favorito ya ingresado.
      // this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) );
      this.favoritosArr.push(new FormControl( this.nuevoFavorito.value, Validators.required ));
      this.nuevoFavorito.reset();
    }
  }

  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
  }

  borrar( index: number ) {
    this.favoritosArr.removeAt(index)
  }

}
