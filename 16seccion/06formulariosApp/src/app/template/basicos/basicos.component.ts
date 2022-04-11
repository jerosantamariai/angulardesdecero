import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  ProductValidation(): boolean {
    return this.myForm?.controls['product']?.invalid 
            && this.myForm?.controls['product']?.touched
  }

  PriceValidation(): boolean {
    return this.myForm?.controls['price']?.value < 0 
            && this.myForm?.controls['price']?.touched
  }

  // guardar( myForm: NgForm ) {
  guardar() {
    console.log(this.myForm);
    console.log("guardado");
  };

}
