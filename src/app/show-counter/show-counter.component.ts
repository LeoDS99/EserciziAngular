import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css'],
})
export class ShowCounterComponent implements OnInit {
  constructor(public counterservice: CounterService) {}

  add(value: number) {
    return this.counterservice.addvalue(value);
  }
  sub(value: number) {
    return this.counterservice.subvalue(value);
  }

  ngOnInit(): void {}
}
