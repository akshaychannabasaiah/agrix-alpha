import { Component, OnInit } from "@angular/core";
import template from "./pest-data.component.html";
import style from "./pest-data.component.scss";

@Component({
  selector: "pest-data",
  template,
  styles: [ style ]
})
export class PestDataComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit() {
  }
}
