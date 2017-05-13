import { Component, OnInit } from "@angular/core";
import template from "./newsfeed.component.html";
import style from "./newsfeed.component.scss";
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: "newsfeed",
  template,
  styles: [ style ]
})
export class NewsfeedComponent implements OnInit {

  data: any[] = [
    {
      id: 0,
      type: 'weed',
      details: 'Corn Weevil alert!!!' 
    },
    {
      id: 1,
      type: 'bug',
      details: 'Corn Weevil alert!!!' 
    },
    {
      id: 2,
      type: 'fungi',
      details: 'Corn Weevil alert!!!' 
    },
    {
      id: 3,
      type: 'alert',
      details: 'Corn Weevil alert!!!' 
    }

  ];

  image: string[] =[
    "images/bug_icon.png", "images/weed_icon.png", "images/warning_icon.png", "images/fungi_icon.png"
  ];

  constructor(private _location: Location, public _router: Router) {
  }

  ngOnInit() {
  }

  selected(id){
    this._router.navigateByUrl('pest/' + id);
  }
}
