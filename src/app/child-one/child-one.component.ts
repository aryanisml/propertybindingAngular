import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  private _prop: string | any;
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  ngOnInit() {
  }

  @Input() get selection() {
    return this._prop;

  }
  set selection(name) {
    this._prop = name;
    this.selectionChange.emit(this._prop);
  }

  Send(): void {
    this.selection = `Child 2 property set by child 1 via parent`;
  }

}
