import { Component, OnInit } from "@angular/core";
import template from "./pest-data.component.html";
import style from "./pest-data.component.scss";
import { Observable } from "rxjs";
import { PestMapDataService } from "../../services/pestMap-data.service";
import { PestData } from "../../../../../both/models/pestData.model";
import { PestDataCollection } from "../../../../../both/collections/pestData.collection";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Field } from "../../../../../both/models/field.model";
import { FarmerService } from "../../services/farmer-data.service";
import { Farmer } from "../../../../../both/models/farmer.model";
import { FarmerCollection } from "../../../../../both/collections/farmer.collection";
import { InjectUser } from 'angular2-meteor-accounts-ui';
@Component({
  selector: "pest-data",
  template,
  styles: [ style ]
})

@InjectUser('user')
export class PestDataComponent implements OnInit {
  compName: string;
  pest: any ={}; 
  fieldData: Field[];
    farmerData: Observable<Farmer[]>; 
  id: number;
  private sub: any;
   currentFarmer: Farmer;
  data: Observable<PestData[]>;
  centerLat = 0;
  centerLong = 0;
  fillcolor = "Red";
  user: Meteor.User;
  processing: Boolean = true;
  type: any = [
    'bug', 'fungi', 'weed', 'warning'
  ]
  compData: any[] = [
    {
      id: 0,
      name: 'Corn Weevil',
      icon: "/images/corn_weevil.jpg",
      info1: "Breeds between 15 and 35 °C",
      info2: "size 2.5 - 4 mm",
      info3: "attacks both standing and stored crops",
    },
    {
      id: 1,
      name: 'Army Worm',
      icon: "/images/armyworm.jpg",
      info1: "first signs on the lower leaves",
      info2: "white, powdery appearance",
      info3: "grows best in wet air conditions",
    },
    {
      id: 2,
      name: 'Aphid',
      icon: "/images/aphid.jpg",
      info1: "1-year growth cycle",
      info2: "height 15 - 80 cm",
      info3: "prevented best by crop rotation",
    },
    {
      id: 3,
      name: 'Frost',
      icon: "/images/frost.jpg",
      info1: "damages leaves and stems",
      info2: "most damages occur on ground level",
      info3: "increased occurrence due to climate change",
    },

  ] 

  constructor(private pestMapDataService: PestMapDataService, private farmerService: FarmerService, private route: ActivatedRoute, public _router: Router) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.pest = this.compData.filter( c => c.id === this.id)[0];
      this.compName = this.pest.name;
      
    });

    this.data = this.pestMapDataService.getData().zone();
    this.farmerData = this.farmerService.getData().zone();

    this.farmerData.subscribe((data) => {
        if(this.user !== undefined ){
        this.currentFarmer = data.filter((d) => d.id === this.user.profile.id)[0];
        this.centerLat = this.currentFarmer.centerLat;
        this.centerLong = this.currentFarmer.centerLong;
        this.fieldData = this.currentFarmer.fields;
        }        
    });
    this.processing = false;
  }

  clicked(id){
    if(id==1){
      this._router.navigateByUrl('publishspotting');
    }
    else{
      this._router.navigateByUrl('consultant');
    }
  }



}
