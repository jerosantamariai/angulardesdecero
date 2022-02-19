import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsBodyComponent } from './gifs-body/gifs-body.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    GifsBodyComponent,
    SearchComponent,
    ResultsComponent
  ],
  exports: [
    GifsBodyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
