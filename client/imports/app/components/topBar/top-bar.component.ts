import { Component, OnInit, Input } from "@angular/core";
import template from "./top-bar.component.html";
import style from "./top-bar.component.scss";

@Component({
  selector: "top-bar",
  template,
  styles: [ style ]
})
export class TopBarComponent implements OnInit {
  @Input() title: string;
  @Input() linkBack: string;
  constructor() {
    
  }

  ngOnInit() {
    
  }
}
