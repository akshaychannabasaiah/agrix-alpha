import { Component, OnInit } from "@angular/core";
import template from "./consultant.component.html";
import style from "./consultant.component.scss";

@Component({
  selector: "consultant",
  template,
  styles: [ style ]
})
export class ConsultantComponent implements OnInit {
  compName : string;
  constructor() {
    this.compName = "Contact Consultant";
  }

  ngOnInit() {
  }
}
