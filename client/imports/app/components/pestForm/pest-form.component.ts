import { Component, OnInit } from "@angular/core";
import template from "./pest-form.component.html";
import style from "./pest-form.component.scss";
import { PestLocation } from "../../../../../both/models/pestLocation.model";
import { PestLocationCollection } from "../../../../../both/collections/pestLocation.collection";
import { PestMapDataService } from "../../services/pestMap-data.service";
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: "pest-form",
  template,
  styles: [ style ]
})

export class PestFormComponent implements OnInit {
  
  compName: string;
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
    opacity: undefined,
    date: '',
    field: {},
  };

  

  fields: any[]=[
    {
        id: 0,
        name: 'Field 1',
        lat: 35.00,
        long: 45.00
    },
    {
        id: 1,
        name: 'Field 2',
        lat: 35.00,
        long: 47.00
    },
    {
        id: 2,
        name: 'Field 3',
        lat: 35.00,
        long: 46.00
    },
  ];

  fieldsSelection : SelectItem[];


  constructor() {
    this.compName = "Publish Spotting";
    this.formdata = this.initdata;
    this.fieldsSelection = [];
    this.fieldsSelection.push({
      label: 'field1', value: this.fields[0]
    });
    this.fieldsSelection.push({
      label: 'field2', value: this.fields[1]
    });
    this.fieldsSelection.push({
      label: 'field3', value: this.fields[2]
    });

  }

  ngOnInit() {
  }

  addSpotting(data){
    this.formdata.name = data.pestName;
    this.formdata.field = data.field;
    this.formdata.long = data.long;
    this.formdata.radius = 25000;
    this.formdata.opacity = 0.5;
    this.formdata.gradient = 25;
    PestLocationCollection.insert(this.formdata);
    this.formdata = this.initdata;
  }
}
