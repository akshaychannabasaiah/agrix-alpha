import { Component, OnInit, ViewChild } from "@angular/core";

import { Observable } from "rxjs";
import { PestMapDataService } from "../../services/pestMap-data.service";
import { PestLocation } from "../../../../../both/models/pestLocation.model";
import { PestLocationCollection } from "../../../../../both/collections/pestLocation.collection";

import template from "./home.component.html";
import style from "./home.component.scss";

@Component({
  selector: "home",
  template,
  styles: [ style ]
})

export class HomeComponent implements OnInit {
   
  
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

  constructor(private pestMapDataService: PestMapDataService) {
    this.compName = "Agrix Alpha";
    this.formdata = this.initdata;
  }
    
  ngOnInit() {
    this.data = this.pestMapDataService.getData().zone();
    this.data.subscribe((data) => {
        this.processing = false;
        this.centerLat = data[0].lat;
        this.centerLong = data[0].long;
    });
  }

  clicked(e){
    console.log(e);
  }
}
