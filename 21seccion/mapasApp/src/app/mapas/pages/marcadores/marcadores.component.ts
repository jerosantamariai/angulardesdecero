import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .map-container {
        width: 100vw;
        height: 100vh;
      }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 13;
  center: [ number, number ] = [-70.673676, -33.447487]

  constructor() { }
  
  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.center, // starting position [lng, lat]
      zoom: this.zoomLevel // starting zoom      
    });

    const markerHtml: HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'Yo aqui'

    new mapboxgl.Marker({
      element: markerHtml,
    })
      .setLngLat( this.center )
      .addTo( this.mapa );

  }

}
