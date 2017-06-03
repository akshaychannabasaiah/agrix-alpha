import { Component, OnInit } from "@angular/core";
import template from "./clear-field.component.html";
import style from "./clear-field.component.scss";
import { PestData } from "../../../../../both/models/pestData.model";
import { PestDataCollection } from "../../../../../both/collections/pestData.collection";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { PestMapDataService } from "../../services/pestMap-data.service";
import { PestService } from "../../services/pest.service";
import { FarmerService } from "../../services/farmer-data.service";
import { Farmer } from "../../../../../both/models/farmer.model";
import { FarmerCollection } from "../../../../../both/collections/farmer.collection";
import { Field } from "../../../../../both/models/field.model";
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Observable } from "rxjs";
import { Pest } from "../../../../../both/models/pest.model";
import { Action } from "../../../../../both/models/action.model";
import { MeteorObservable } from "meteor-rxjs/dist";


@Component({
  selector: "clear-field",
  template,
  styles: [style]
})

@InjectUser('user')
export class ClearFieldComponent implements OnInit {
  defCleared: boolean = false;
  cleared: boolean = false;
  compName: string;
  data: Observable<PestData[]>;
  user: Meteor.User;
  farmerData: Observable<Farmer[]>;
  centerLat = 0;
  centerLong = 0;
  currentFarmer: Farmer;
  currentPest: PestData;
  pests: Observable<Pest[]>;
  processing: Boolean = false;
  color = "#9C27B0";
  fieldData: Field[];
  rating: number;
  icons: any = {
    'weed': '/images/weed_pin.png',
    'bug': '/images/bug_pin.png',
    'warning': '/images/warning_pin.png',
    'fungi': '/images/fungi_pin.png',
  }
  pestData: any = [
    {
      name: 'Corn Weevil',
      fieldName: 'North Field',
      date: '29.05.2017',
      pesticide: 'BASF Artett',
      pesticideDate: '30.05.2017',
      icon: 'images/1.png'
    },
    {
      name: 'Army worm',
      fieldName: 'South Field',
      date: '29.05.2017',
      pesticide: 'Bayer Decis Forte',
      pesticideDate: '30.05.2017',
      icon: 'images/2.png'
    },
    {
      name: 'Aphid',
      fieldName: 'North Field',
      date: '29.05.2017',
      pesticide: 'BASF Elando',
      pesticideDate: '30.05.2017',
      icon: 'images/3.png'
    },
    {
      name: 'White Mildew',
      fieldName: 'North Field',
      date: '29.05.2017',
      pesticide: 'Sygenta Durivo',
      pesticideDate: '30.05.2017',
      icon: 'images/2.png'
    },
  ]

  sub: any;
  id: string;
  constructor(private pestMapDataService: PestMapDataService, private pestService: PestService, public _router: Router, private farmerService: FarmerService, private route: ActivatedRoute) {
    this.compName = "Clear a Field";
  }

  ngOnInit() {
    this.data = this.pestMapDataService.getData().zone();
    this.farmerData = this.farmerService.getData().zone();
    this.pests = this.pestService.getData().zone();
    this.farmerData.subscribe((data) => {
      if (this.user !== undefined) {
        this.currentFarmer = data.filter((d) => d.id === this.user.profile.id)[0];
        this.centerLat = this.currentFarmer.centerLat;
        this.centerLong = this.currentFarmer.centerLong;
        this.fieldData = this.currentFarmer.fields;
      }
    });

    this.sub = this.route.params.subscribe(params => {
      this.id = params['_id'];
    });

    this.data.subscribe((pest) => {
      this.currentPest = pest.filter(p => p._id === this.id)[0];
      this.processing = false;
  });
    
  }

  clicked(type: string) {
    if (type == 'bug') {
      this._router.navigateByUrl('pest/' + '0');
    }
    else if (type == 'fungi') {
      this._router.navigateByUrl('pest/' + '1');
    }
    else if (type == 'weed') {
      this._router.navigateByUrl('pest/' + '2');
    }
    else {
      this._router.navigateByUrl('pest/' + '3');
    }
  }

  btnClicked(id) {
    if (id == 1) {
      this._router.navigateByUrl('pest/' + this.id + '/suggestions');
    }
    else if (id == 2) {
      this._router.navigateByUrl('consultant');
    }
    else if (id == 3) {
      this._router.navigateByUrl('record');
    }
    else if (id == 4){
      this.cleared = true;
    }
    else{
      this.cleared = false;
      PestDataCollection.remove({
        _id: this.id
      });
      this.defCleared = true;
    }
  }


}
