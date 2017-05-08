import { Component, Input } from "@angular/core";
import template from "./bottom-bar.component.html";
import style from "./bottom-bar.component.scss";

@Component({
  selector: "bottom-bar",
  template,
  styles: [ style ]
})
export class BottomBarComponent {
  //@Input() chosen: string;
  
  constructor() {

  }
}
