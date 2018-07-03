import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private _childOneProp;
  private _childTwoProp;

  @Input() get childOneProp() {
    return this._childOneProp;
  }

  set childOneProp(v: string) {
    this._childOneProp = v;
    this.childTwoProp = v;
  }

  @Input() get childTwoProp() {
    return this._childTwoProp;
  }
  set childTwoProp(v: string) {
    this._childTwoProp = v;
  }

  Send(): void {
    this.childOneProp = `Child 2  property set by parent`;
  }



}
