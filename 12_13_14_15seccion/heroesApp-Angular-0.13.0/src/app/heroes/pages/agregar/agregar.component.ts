import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";

import { HeroesService } from '../../services/heroes.service';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 90%;
      border-radius: 30px;
    }
  `
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) {

  }

  ngOnInit(): void {

    if (this.router.url.includes('editar')) {

      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.heroesService.getHeroePorId(id))
        )
        .subscribe(heroe => this.heroe = heroe)

    }

  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {

      return;

    }

    if (this.heroe.id) {

      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe(heroe => {
          this.mostrarSnackBar('Heroe Actualizado!'),
            console.log('Actualizando', heroe)
        });

    } else {
      this.heroesService.agregarHeroe(this.heroe)
        .subscribe(resp => {
          this.mostrarSnackBar('Heroe Agregado!'),
            this.router.navigate(['/heroes/editar', this.heroe.id]);
        });
    }

  }

  borrarHeroe() {

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '50%',
      height: '50%',
      data: this.heroe
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          // console.log(result);
          this.heroesService.borrarHeroe(this.heroe.id!)
            .subscribe(resp => {
              this.mostrarSnackBar('Heroe Borrado!')
              this.router.navigate(['/heroes']);
            });
        }
      }
    )
  }

  mostrarSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Hecho!', {
      duration: 2500,
    })
  }

}
