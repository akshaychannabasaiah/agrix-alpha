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

formdata : any;
checked: boolean = true;
//parentRouter: any = Router;

  constructor(private _location: Location, public _router: Router) {
  this.formdata = {
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    phone: "",
    isFarmer: true
  }
}
    
  ngOnInit() {
   
  }

  signup(data){
    let router = this._router;

    if (this.isValidPassword(data.password, data.password2)) { 
       Accounts.createUser({
           email: data.email,
           password: data.password,
           profile: {
              firstName: data.fname,
              lastName: data.lname,
              phone: data.phone,
              isFarmer: data.isFarmer,
              id: Math.floor((Math.random() * 10) + 1),
           }
      }, function(error) {
         if (error) {
            alert("Error:"  + error.reason);
         } else {
            router.navigateByUrl('home');
         }
      });
    }

  }

  isValidPassword (pwd, pwd2) {

       if (pwd === pwd2) {
         let val;
         (pwd.length >= 6) ? val = true 
                            : val = false;
          if(!val){
            alert("Password should be atleast 6 characters long.");
          return val;          
        }

        else return val;
       } else {
         alert("Passwords don't match y'all");
         return false;
       }
     }

   backpressed(){
    this._location.back();
  }

}
