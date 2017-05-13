import { Component, OnInit } from "@angular/core";
import template from "./newsfeed.component.html";
import style from "./newsfeed.component.scss";

@Component({
  selector: "newsfeed",
  template,
  styles: [ style ]
})
export class NewsfeedComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit() {
  }
}
