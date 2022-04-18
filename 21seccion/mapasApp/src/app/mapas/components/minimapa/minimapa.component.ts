import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-minimapa',
  templateUrl: './minimapa.component.html',
  styles: [
    `
      div {
        width: 100%;
        height: 200px;
        margin: 0;
      }
    `
  ]
})
export class MinimapaComponent implements OnInit, AfterViewInit {

  @Input() lngLat: [number, number] = [0, 0];
  @ViewChild('mapa') divMapa!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    const mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom      
      interactive: false
    });

    new mapboxgl.Marker()
      .setLngLat( this.lngLat )
      .addTo( mapa )
  }

}
