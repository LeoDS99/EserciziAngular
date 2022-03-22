import { Component, Input, OnInit } from '@angular/core';
import { Person, Address, Gender, Role } from '../models/User';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css'],
})
export class UserSingleComponent implements OnInit {
  @Input() index!: number;
  @Input() user!: Person;
  constructor() {}

  ngOnInit(): void {}
}
