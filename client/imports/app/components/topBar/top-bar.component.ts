import { Component, OnInit, Input } from "@angular/core";
import {Location} from '@angular/common';
import template from "./top-bar.component.html";
import style from "./top-bar.component.scss";
import { Router } from '@angular/router';

@Component({
  selector: "top-bar",
  template,
  styles: [ style ]
})
export class TopBarComponent {
  @Input() title: string;
  tite : string;
  constructor(private _location: Location, public _router: Router) {
  }

  backpressed(){
    this._location.back();
  }

  logout(){
    Meteor.logout();
    this._router.navigateByUrl('/');
  }
}
