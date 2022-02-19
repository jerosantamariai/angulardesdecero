import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent {

  get resultados() {
    return this.gifsService.resultados;
  }

  constructor ( private gifsService: GifsService ) {

  }

}

