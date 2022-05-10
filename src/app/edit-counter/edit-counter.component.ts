import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css'],
})
export class EditCounterComponent implements OnInit {
  Value: FormControl = new FormControl('');
  @Output() increase: EventEmitter<number> = new EventEmitter();
  @Output() decrease: EventEmitter<number> = new EventEmitter();
  constructor() {}

  add(value: number) {
    this.increase.emit(value);
  }

  sub(value: number) {
    this.decrease.emit(value);
  }

  ngOnInit(): void {}
}
