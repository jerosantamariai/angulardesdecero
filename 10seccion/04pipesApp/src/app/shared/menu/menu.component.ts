import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Ng',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: ''
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          },
          // {
          //   label: 'Textos y Fechas',
          //   icon: 'pi pi-align-left',
          //   routerLink: ''
          // },
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-user-edit',
        items: [
          {
            label: 'algo',
            icon: 'pi pi-inbox',
          }
        ]
      }
    ]
  }
}
