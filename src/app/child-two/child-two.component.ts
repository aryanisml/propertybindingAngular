import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  private _prop: string;
  constructor() { }

  ngOnInit() {
  }
  @Input() get selection() {
    return this._prop;
  }
  set selection(name) {
    this._prop = name;
  }
}
