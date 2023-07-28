import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>{{counter}}</p>
  <div class="d-flex gap-3 ">
    <button class="btn btn-primary " (click)="increaseBy(1)">+1</button>
    <button class="btn btn-primary " (click)="decreaseBy(1)">-1</button>
    <button class="btn btn-primary " (click)="reset()">Reset</button>
  </div>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  reset(): void {
    this.counter = 10;
  }
}
