import { Component, OnInit } from "@angular/core";
import template from "./pest-suggestions.component.html";
import style from "./pest-suggestions.component.scss";

@Component({
  selector: "pest-suggestions",
  template,
  styles: [ style ]
})
export class PestSuggestionsComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit() {
  }
}
