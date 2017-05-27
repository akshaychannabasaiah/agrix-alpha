import { Component, OnInit } from "@angular/core";
import template from "./signup.component.html";
import style from "./signup.component.scss";
import { Farmer } from "../../../../../both/models/farmer.model";
import { FarmerCollection } from "../../../../../both/collections/farmer.collection";
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

@Component({
  selector: "sign-up",
  template,
  styles: [ style ]
})

export class SignupComponent {

farmerData : Farmer;
checked: boolean;
//parentRouter: any = Router;

  constructor(private _location: Location, public _router: Router) {
    }
    
  ngOnInit() {
   
  }

  addFarmer(){
    /*this.farmerData.name = data.fname + ' ' + data.lname;
    this.farmerData.email = data.email;
    this.farmerData.cell = data.phone;
    this.farmerData.password = data.password;
    this.farmerData.fields = [];
    this.farmerData.isFarmer = this.checked;
    FarmerCollection.insert(this.farmerData);
    console.log(this.farmerData);*/
    this._router.navigateByUrl('home');

  }

   backpressed(){
    this._location.back();
  }

}
