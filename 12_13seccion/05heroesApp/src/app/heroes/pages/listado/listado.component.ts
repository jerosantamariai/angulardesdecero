import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor( private HeroesService: HeroesService ) { }

  ngOnInit(): void {

    this.HeroesService.getHeroes()
      .subscribe( resp => {
        return this.heroes = resp;
      });

  }

}
