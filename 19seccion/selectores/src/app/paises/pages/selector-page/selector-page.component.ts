import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: [ '', Validators.required ],
    pais: [ '', Validators.required ],
    frontera: [ '', Validators.required ],
  })

  //Aqui llenamos los selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];
  fronteras: string[] = [];

  cargando: boolean = false;

  constructor( private fb: FormBuilder,
               private paisesService: PaisesService ) { }

  ngOnInit(): void {

    this.regiones = this.paisesService.regiones;

    // this.miFormulario.get('region')?.valueChanges
    //   .subscribe( region => {

    //     this.paisesService.getPaisesPorRegion( region )
    //       .subscribe( paises => {
    //         console.log( paises );
    //         this.paises = paises;
    //       })
    //   })

    //Traer Region
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( ( _ ) => {
          this.miFormulario.get('pais')?.reset('');
          this.cargando = true;
        }),
        switchMap( region => this.paisesService.getPaisesPorRegion( region ))
      )
      .subscribe( paises => {
        console.log(paises);
        this.paises = paises;
        this.cargando = false;
      })

      // Traer Paises
      this.miFormulario.get('pais')?.valueChanges
        .pipe(
          tap( ( _ ) => {
            // this.fronteras = [];
            console.log(this.paises);
            this.miFormulario.get('frontera')?.reset('');
            this.cargando = true;
          }),
          switchMap( codigo => this.paisesService.getPaisesPorCodigo( codigo ))
        )
        .subscribe( pais => {
          console.log(pais);
          this.fronteras = pais?.borders || [];
          this.cargando = false;
        })

  }

  guardar() {
    console.log(this.miFormulario.value);
  }
}
