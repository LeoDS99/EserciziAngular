import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counter: number = 0;

  constructor() {}

  takevalue() {
    if (this.counter < 0) {
      return console.log("counter can't be less than 0");
    } else {
      return this.counter;
    }
  }
  addvalue(value: number) {
    let defaultnumber = 1;
    if (!value) {
      this.counter = this.counter + defaultnumber;
    } else {
      this.counter = this.counter + value;
    }
    console.log(this.counter);
  }
  subvalue(value: number) {
    let defaultnumber = 1;
    if (this.counter < 0) {
      console.log("counter can't be less than 0");
    } else if (!value) {
      this.counter = this.counter - defaultnumber;
    } else {
      this.counter = this.counter - value;
    }
  }
}
