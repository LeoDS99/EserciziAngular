import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter = new BehaviorSubject<number>(0);

  constructor() {}

  takevalue() {
    return this.counter.asObservable();
  }

  addvalue(value: number) {
    let defaultnumber = 1;
    if (!value) {
      this.counter.next(this.counter.value + defaultnumber);
    } else {
      this.counter.next(this.counter.value + value);
    }
    console.log(this.counter.value);
  }

  subvalue(value: number) {
    let defaultnumber = 1;
    if (this.counter.value < 0) {
      console.log('counter cant be less than 0');
    } else if (!value) {
      this.counter.next(this.counter.value - defaultnumber);
    } else {
      this.counter.next(this.counter.value - value);
    }
    console.log(this.counter.value);
  }
  // takevalue() {
  //   if (this.counter < 0) {
  //     return console.log("counter can't be less than 0");
  //   } else {
  //     return this.counter;
  //   }
  // }
  // addvalue(value: number) {
  //   let defaultnumber = 1;
  //   if (!value) {
  //     this.counter = this.counter + defaultnumber;
  //   } else {
  //     this.counter = this.counter + value;
  //   }
  //   console.log(this.counter);
  // }
  // subvalue(value: number) {
  //   let defaultnumber = 1;
  //   if (this.counter < 0) {
  //     console.log("counter can't be less than 0");
  //   } else if (!value) {
  //     this.counter = this.counter - defaultnumber;
  //   } else {
  //     this.counter = this.counter - value;
  //   }
  // }
}
