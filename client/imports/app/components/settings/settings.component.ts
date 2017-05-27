import { Component, OnInit } from "@angular/core";
import template from "./settings.component.html";
import style from "./settings.component.scss";
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: "settings",
  template,
  styles: [ style ]
})

export class SettingsComponent {
  compName : string;
  constructor(private _location: Location, public _router: Router) {
    this.compName = "Settings"; 
  }
    
  ngOnInit() {
   
  }

  goto(id: number ){
      if(id == 1 ){
        this._router.navigateByUrl('consultant');
      }
      else{
         this._router.navigateByUrl('manage');
      }
  }

}
