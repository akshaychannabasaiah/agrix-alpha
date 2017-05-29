import { Component, OnInit } from "@angular/core";
import template from "./pest-form.component.html";
import style from "./pest-form.component.scss";
import { PestData } from "../../../../../both/models/pestData.model";
import { PestDataCollection } from "../../../../../both/collections/pestData.collection";
import { PestMapDataService } from "../../services/pestMap-data.service";
import { SelectItem } from 'primeng/primeng';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { FarmerService } from "../../services/farmer-data.service";
import { Farmer } from "../../../../../both/models/farmer.model";
import { FarmerCollection } from "../../../../../both/collections/farmer.collection";
import { Field } from "../../../../../both/models/field.model";
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Observable } from "rxjs";


@Component({
  selector: "pest-form",
  template,
  styles: [ style ]
})

@InjectUser('user')
export class PestFormComponent implements OnInit {
  published: boolean = false;
  compName: string;
  centerLat = 0;
  centerLong = 0;
  processing: Boolean = false;
  formdata: PestData;
  farmerData: Observable<Farmer[]>; 
  user: Meteor.User;
  currentFarmer: Farmer;
  icons: any = {
    'weed': '/images/weed_pin.png',
    'bug': '/images/bug_pin.png',
    'warning': '/images/warning_pin.png',
    'fungi': '/images/fungi_pin.png',
  }
   fieldData: Field[];
  initdata: PestData = {
    name:'',
    type: 'bug',
    lat: undefined,
    long: undefined,
    radius: undefined,
    gradient: 25,
    opacity: undefined,
    field: {},
    date: new Date(),
  };

  selectedStyle:any = {border: '3px solid #f24964' };
  styles:any=[{},{border: '3px solid #f24964' },{},{}];
  types:string[]=['weed','bug','fungi','warning'];
  type: number = 1;
  fieldsSelection : SelectItem[];


  constructor(public _router: Router, private farmerService: FarmerService) {
    this.compName = "Publish Spotting";
    this.formdata = this.initdata;
    this.fieldsSelection = [];
  }

  ngOnInit() {
    this.farmerData = this.farmerService.getData().zone();
   
    this.farmerData.subscribe((data) => {
        if(this.user !== undefined ){
        this.currentFarmer = data.filter((d) => d.id === this.user.profile.id)[0];
        this.centerLat = this.currentFarmer.centerLat;
        this.centerLong = this.currentFarmer.centerLong;
        this.fieldData = this.currentFarmer.fields;
        this.fieldData.map((f) => {
          this.fieldsSelection.push({
              label: f.name, value: f
              });
          }); 
        }        
    });
    this.processing = false;
  

    
  }

  addSpotting(data){
    this.formdata.name = data.pestname;
    this.formdata.lat = data.field.centerLat;
    this.formdata.long = data.field.centerLong;
    this.formdata.radius = 500;
    this.formdata.opacity = 0.2;
    this.formdata.gradient = 25;
    this.formdata.date = data.date;
    PestDataCollection.insert(this.formdata);
 //   console.log(this.formdata);
   // this.formdata = this.initdata;
    this.published = true;
  }

  typeSelected(id: number){
    this.type=id;
    this.formdata.type = this.types[id];
    this.styles=[{},{},{},{}];
    this.styles[id]=this.selectedStyle;
  }

  clicked(id){
    if(id == 1){
      this._router.navigateByUrl('pest/' + this.type +'/suggestions');
    }
    else{
      this._router.navigateByUrl('consultant');
    }
  }
}
