import { Component, OnInit } from "@angular/core";
import template from "./home.component.html";
import style from "./home.component.scss";

@Component({
  selector: "home",
  template,
  styles: [ style ]
})
export class HomeComponent implements OnInit {
  compName : string;
  constructor() {
    this.compName = "Agrix Alpha";
  }
    
  ngOnInit() {
  }
}
