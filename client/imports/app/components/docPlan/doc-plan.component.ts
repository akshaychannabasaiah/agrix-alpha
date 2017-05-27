import { Component, OnInit } from "@angular/core";
import template from "./doc-plan.component.html";
import style from "./doc-plan.component.scss";

@Component({
  selector: "doc-plan",
  template,
  styles: [ style ]
})
export class DocPlanComponent implements OnInit {
  compName : string;
  constructor() {
    this.compName = "Documentation";
  }

  ngOnInit() {
  }
}
