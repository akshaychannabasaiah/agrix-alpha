import { Component, Input } from "@angular/core";
import template from "./bottom-bar.component.html";
import style from "./bottom-bar.component.scss";
import { Router } from '@angular/router';

@Component({
  selector: "bottom-bar",
  template,
  styles: [ style ]
})
export class BottomBarComponent {
  //@Input() chosen: string;
  
  constructor(public _router: Router) {

  }

  buttonclick(id){
    if(id===1){
      this._router.navigateByUrl('docplan');
    }
    else if(id===2){
      this._router.navigateByUrl('record');
    }
    else if(id===3){
      this._router.navigateByUrl('home');
    }
    else if(id===4){
      this._router.navigateByUrl('publishspotting');
    }
    else{
      this._router.navigateByUrl('settings');
    }
  }
}
