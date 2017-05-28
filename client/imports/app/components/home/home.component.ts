import { Component, OnInit, ViewChild } from "@angular/core";

import { Observable } from "rxjs";
import { PestMapDataService } from "../../services/pestMap-data.service";
import { FarmerService } from "../../services/farmer-data.service";
import { Farmer } from "../../../../../both/models/farmer.model";
import { FarmerCollection } from "../../../../../both/collections/farmer.collection";
import { Field } from "../../../../../both/models/field.model";
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { PestLocation } from "../../../../../both/models/pestLocation.model";
import { PestLocationCollection } from "../../../../../both/collections/pestLocation.collection";
import {Router} from '@angular/router';
import template from "./home.component.html";
import style from "./home.component.scss";

@Component({
  selector: "home",
  template,
  styles: [ style ]
})

@InjectUser('user')
export class HomeComponent implements OnInit {
  farmerData: Observable<Farmer[]>; 
  user: Meteor.User;
  currentFarmer: Farmer;
  compName: string;
  data: Observable<PestLocation[]>;
  centerLat = 0;
  centerLong = 0;
  processing: Boolean = true;
  formdata: PestLocation;
  initdata: PestLocation = {
    name:'',
    lat: undefined,
    long: undefined,
    radius: undefined,
    gradient: 25,
    opacity: undefined
  };
  fieldData: Field[];

  constructor(private pestMapDataService: PestMapDataService, private farmerService: FarmerService, public _router: Router) {
    this.compName = "Agrix Alpha";
    this.formdata = this.initdata;
   
  }
    
  ngOnInit() {
    
    this.data = this.pestMapDataService.getData().zone();
    this.farmerData = this.farmerService.getData().zone();
   
    this.farmerData.subscribe((data) => {
        if(this.user !== undefined ){
        this.currentFarmer = data.filter((d) => d.id = this.user.profile.id)[0];
        this.centerLat = this.currentFarmer.centerLat;
        this.centerLong = this.currentFarmer.centerLong;
        this.fieldData = this.currentFarmer.fields;
        }        
    });
    this.processing = false;
  }

  clicked(e){
    this._router.navigateByUrl('pest/' + '1');
  }
}
