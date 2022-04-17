import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styles: [
    `
    #map {
      width: 100vw;
      height: 100vh;
    }
`
  ]
})
export class FullscreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-70.673676, -33.447487], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

  }

}
