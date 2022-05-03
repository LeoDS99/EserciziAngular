import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css'],
})
export class UserContainerComponent implements OnInit {
  public showdetail: boolean = false;
  constructor() {}

  toggle() {
    this.showdetail = !this.showdetail;
  }
  ngOnInit(): void {}
}
