import { Component, OnInit } from "@angular/core";
import template from "./newsfeed.component.html";
import style from "./newsfeed.component.scss";

@Component({
  selector: "newsfeed",
  template,
  styles: [ style ]
})
export class NewsfeedComponent implements OnInit {

  data: any = [
    {
      id: 1,
      type: 'weed',
      details: 'Corn Weevil alert!!!' 
    },
    {
      id: 2,
      type: 'bug',
      details: 'Corn Weevil alert!!!' 
    },
    {
      id: 3,
      type: 'fungi',
      details: 'Corn Weevil alert!!!' 
    },
    {
      id: 4,
      type: 'alert',
      details: 'Corn Weevil alert!!!' 
    },

  ];

  constructor() {
  }

  ngOnInit() {
  }
}
