import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      <button (click)="inc()">+</button>  {{CounterV}} <button (click)="dec()">-</button>  
    </p>
  `,
 
})
export class CounterComponent {

  
  @Input('defaultvalue') CounterV;
  @Output() counterEmitter = new EventEmitter();

  counterValue:number=0;

  constructor() {
  }

  ngOnInit() {
  }

  inc(){
    this.counterEmitter.emit(++this.CounterV);
  }

  dec(){
    this.counterEmitter.emit(--this.CounterV);
  }

  
}