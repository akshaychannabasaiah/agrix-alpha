import { Component, OnInit } from "@angular/core";
import template from "./manage-my-field.component.html";
import style from "./manage-my-field.component.scss";

import { Observable } from "rxjs";
import { Field } from "../../../../../both/models/field.model";
import { FarmerService } from "../../services/farmer-data.service";
import { Farmer } from "../../../../../both/models/farmer.model";
import { FarmerCollection } from "../../../../../both/collections/farmer.collection";
import { InjectUser } from 'angular2-meteor-accounts-ui';

import { PestData } from "../../../../../both/models/pestData.model";
import { PestDataCollection } from "../../../../../both/collections/pestData.collection";
import { PestMapDataService } from "../../services/pestMap-data.service";
import {Router} from '@angular/router';

@Component({
  selector: "manage-my-field",
  template,
  styles: [ style ]
})

@InjectUser('user')
export class ManageFieldComponent implements OnInit {
  farmerData: Observable<Farmer[]>; 
  user: Meteor.User;
  currentFarmer: Farmer;
  fieldData: Field[];
  pestData: Observable<PestData[]>;
  processing : boolean = true;
  centerLat: number = 20;
  centerLong: number = 20;
  type: string = "doughnut";
  compName: string;
  data: any = {
    datasets: [{
      data: [],
      backgroundColor: []
    }],

    labels: [],
    
  };
   icons: any = {
    'weed': '/images/weed_pin.png',
    'bug': '/images/bug_pin.png',
    'warning': '/images/warning_pin.png',
    'fungi': '/images/fungi_pin.png',
  }

  options: any = {
        legend: {
            display: true,
            labels: {
                fontColor: '#fff'
            }
        }
};

  
  colors: any = ['#E91E63', '#9C27B0', '#009688', '#FF9800', '#2196F3', '#3F51B5', '#FFEB3B'] 


  constructor(public _router: Router, private pestMapDataService: PestMapDataService, private farmerService: FarmerService) {
    this.compName = "Manage Fields";
    

  }

  ngOnInit() {
this.pestData = this.pestMapDataService.getData().zone();
this.farmerData = this.farmerService.getData().zone();
   
    this.farmerData.subscribe((data) => {
        if(this.user !== undefined ){
        this.currentFarmer = data.filter((d) => d.id === this.user.profile.id)[0];
        this.centerLat = this.currentFarmer.centerLat;
        this.centerLong = this.currentFarmer.centerLong;
        this.fieldData = this.currentFarmer.fields;
        this.fieldData.map((field, index) => {
            this.data.datasets[0].backgroundColor[index] = this.colors[index % 7];
            this.data.datasets[0].data.push(field.area);
            this.data.labels.push(field.cropType + " " + field.area + "ha");
            this.processing = false;
          })
        }        
    });
   

  }

   clicked(type: string){
    if(type == 'bug'){
      this._router.navigateByUrl('pest/' + '0');
    }
    else if(type == 'fungi'){
      this._router.navigateByUrl('pest/' + '1');
    }
    else if(type == 'weed'){
      this._router.navigateByUrl('pest/' + '2');
    }
    else {
      this._router.navigateByUrl('pest/' + '3');
    }

  }
}
