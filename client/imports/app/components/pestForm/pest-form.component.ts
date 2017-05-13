import { Component, OnInit } from "@angular/core";
import template from "./pest-form.component.html";
import style from "./pest-form.component.scss";

@Component({
  selector: "pest-form",
  template,
  styles: [ style ]
})
export class PestFormComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit() {
  }
}
