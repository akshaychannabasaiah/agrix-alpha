import { Component, OnInit } from "@angular/core";
import template from "./pest-form.component.html";
import style from "./pest-form.component.scss";
import { PestData } from "../../../../../both/models/pestData.model";
import { PestDataCollection } from "../../../../../both/collections/pestData.collection";
import { PestMapDataService } from "../../services/pestMap-data.service";
import { SelectItem } from 'primeng/primeng';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: "pest-form",
  template,
  styles: [ style ]
})

export class PestFormComponent implements OnInit {
  published: boolean = false;
  compName: string;
  centerLat = 0;
  centerLong = 0;
  processing: Boolean = false;
  formdata: PestData;
  initdata: PestData = {
    name:'',
    type: '',
    lat: undefined,
    long: undefined,
    radius: undefined,
    gradient: 25,
    opacity: undefined,
    field: {},
    date: new Date(),
  };

  selectedStyle:any = {border: '3px solid #f24964' };
  styles:any=[{},{},{},{}];
  types:string[]=['weed','bug','fungi','warning'];

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


  constructor(public _router: Router) {
    this.compName = "Publish Spotting";
    this.formdata = this.initdata;
    this.fieldsSelection = [];
    this.fieldsSelection.push({
      label: 'Super Field', value: this.fields[0]
    });
    this.fieldsSelection.push({
      label: 'Mega Field', value: this.fields[1]
    });
    this.fieldsSelection.push({
      label: 'A Field', value: this.fields[2]
    });

  }

  ngOnInit() {
  }

  addSpotting(data){
    this.formdata.name = data.pestname;
    this.formdata.lat = data.field.lat;
    this.formdata.long = data.field.long;
    this.formdata.radius = 25000;
    this.formdata.opacity = 0.5;
    this.formdata.gradient = 25;
    this.formdata.date = data.date;
    PestDataCollection.insert(this.formdata);
 //   console.log(this.formdata);
   // this.formdata = this.initdata;
    this.published = true;
  }

  typeSelected(id: number){
    this.formdata.type = this.types[id];
    this.styles=[{},{},{},{}];
    this.styles[id]=this.selectedStyle;
  }

  clicked(id){
    if(id == 1){
      this._router.navigateByUrl('pest/1/suggestions');
    }
  }
}
