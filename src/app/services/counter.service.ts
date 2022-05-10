import { Injectable } from '@angular/core';
import { error } from 'console';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counter: number = 0;
  constructor() {}

  takevalue() {
    if (this.counter < 0) {
      console.log(error, "counter can't be less than 0");
    } else {
      this.counter = this.counter;
    }
  }
  addvalue(value: number) {
    this.counter = this.counter + value;
  }
  subvalue(value: number) {
    if (this.counter < 0) {
      console.log(error, "counter can't be less than 0");
    } else {
      this.counter = this.counter - value;
    }
  }
}
