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
      type: 'bug',
      details: 'Corn Weevil spotted 2km away.' 
    },
    {
      id: 1,
      type: 'fungi',
      details: 'White Mildew spotted 1.5 km away.' 
    },
    {
      id: 2,
      type: 'weed',
      details: 'Rough pigweed spotten 4 km away.' 
    },
    {
      id: 3,
      type: 'warning',
      details: 'Frost warning for your region' 
    }

  ];

  image: string[] =[
    "images/bug_icon.png", "images/fungi_icon.png", "images/weed_icon.png", "images/warning_icon.png", 
  ];

  constructor(private _location: Location, public _router: Router) {
  }

  ngOnInit() {
  }

  selected(id){
    this._router.navigateByUrl('pest/' + id);
  }
}
