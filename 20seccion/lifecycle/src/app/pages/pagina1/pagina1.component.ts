import { AfterContentChecked, 
         AfterContentInit, 
         AfterViewChecked, 
         AfterViewInit, 
         Component, 
         DoCheck, 
         OnChanges, 
         OnDestroy, 
         OnInit, 
         SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
  implements OnInit, OnChanges, DoCheck, AfterContentInit, 
              AfterContentChecked, AfterViewInit, AfterViewChecked,
                OnDestroy {

  constructor() {
    console.log("constructor");

  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
    
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

}
