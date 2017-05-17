import { Component, OnInit, Input } from "@angular/core";
import {Location} from '@angular/common';
import template from "./top-bar.component.html";
import style from "./top-bar.component.scss";

@Component({
  selector: "top-bar",
  template,
  styles: [ style ]
})
export class TopBarComponent {
  @Input() title: string;
  tite : string;
  constructor(private _location: Location) {
  }

  backpressed(){
    
    this._location.back();
  }
}
