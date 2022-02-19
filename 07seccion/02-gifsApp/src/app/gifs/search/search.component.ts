import { Component, ElementRef, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  @ViewChild( 'txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) {}

  buscar( ) {
    const value = this.txtSearch.nativeElement.value;

    // Esta validación es para que al apretar enter no inserte información al array
    if ( value.trim().length == 0 ) {
      return;
    }

    this.gifsService.buscarGifs(value);

    this.txtSearch.nativeElement.value = '';
  }

}
