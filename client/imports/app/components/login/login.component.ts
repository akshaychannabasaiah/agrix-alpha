import { Component, OnInit } from "@angular/core";
import template from "./login.component.html";
import style from "./login.component.scss";
import { Farmer } from "../../../../../both/models/farmer.model";
import { FarmerCollection } from "../../../../../both/collections/farmer.collection";
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

@Component({
  selector: "login",
  template,
  styles: [ style ]
})

export class LoginComponent {
formdata: any;

  constructor(private _location: Location, public _router: Router) {
  this.formdata = {
    email: "",
    password: ""
  }; 
  }
    
  ngOnInit() {
   
  }

  login(data){
      let router = this._router;
      Meteor.loginWithPassword(data.email, data.password, function(error) {
         if (error) {
          alert('Wrong login info');
          
         } else {
           router.navigateByUrl('home');
         }
     });

  }

   backpressed(){
    this._location.back();
  }

}
