import { Component, OnInit } from "@angular/core";
import template from "./record-action.component.html";
import style from "./record-action.component.scss";
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
  selector: "record-action",
  template,
  styles: [style]
})

@InjectUser('user')
export class RecordActionComponent implements OnInit {
  published: boolean = false;
  cleared: boolean = false;
  compName: string;
  data: Observable<PestData[]>;
  user: Meteor.User;
  farmerData: Observable<Farmer[]>;
  centerLat = 0;
  centerLong = 0;
  currentFarmer: Farmer;
  pests: Observable<Pest[]>;
  processing: Boolean = false;
  formdata: Action;
  initdata: Action = {
    actionType: 'Pesticide Spray',
    cropType: '',
    pest: '',
    amount: undefined,
    pesticide: '',
    comments: '',
    rating: undefined,
    price: undefined,
    date: new Date(),
  };
  color = "#9C27B0";
  fieldData: Field[];
  icons: any = {
    'weed': '/images/weed_pin.png',
    'bug': '/images/bug_pin.png',
    'warning': '/images/warning_pin.png',
    'fungi': '/images/fungi_pin.png',
  }

  fieldsSelection: SelectItem[];
  pestSelection: SelectItem[];

  constructor(private pestMapDataService: PestMapDataService, private pestService: PestService, public _router: Router, private farmerService: FarmerService) {
    this.compName = "Record an Action";
    this.formdata = this.initdata;
    this.fieldsSelection = [];
    this.pestSelection = [];
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
        this.fieldData.map((f) => {
          this.fieldsSelection.push({
            label: f.name, value: f
          });
        });
      }
    });

    this.pests.subscribe((pest) => {
      pest.map((f) => {
        this.pestSelection.push({
          label: f.name, value: f.name
        });
      });
    });
    this.processing = false;
  }

  addSpotting(data) {
    this.formdata.cropType = data.field.cropType;
    this.formdata.pest = data.pest;
    this.formdata.rating = data.rating;
    this.formdata.amount = data.amount;
    this.formdata.price = data.price;
    this.formdata.comments = "";
    this.formdata.pesticide = data.pesticide;
    this.formdata.date = data.date;

    let action: Action = {
      actionType: this.formdata.actionType,
      cropType: this.formdata.cropType,
      pest: this.formdata.pest,
      pesticide: this.formdata.pesticide,
      date: this.formdata.date,
      comments: this.formdata.comments,
      amount: this.formdata.amount,
      price: this.formdata.price,
      rating: this.formdata.rating
    };
    Meteor.call("RecordActionToDB", this.user.profile.id, data.field.name, action);

    this.published = true;
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
      this._router.navigateByUrl('pest/' + 1 + '/suggestions');
    }
  }


}
