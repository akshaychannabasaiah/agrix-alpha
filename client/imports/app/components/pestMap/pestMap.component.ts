import {Component, OnInit} from "@angular/core";
import { Observable } from "rxjs";
import { PestMapDataService } from "./pestMap-data.service";
import { PestLocation } from "../../../../../both/models/pestLocation.model";
import {PestLocationCollection} from "../../../../../both/collections/pestLocation.collection";
import template from "./pestMap.component.html";
import style from "./pestMap.component.scss";

@Component({
  selector: "pest-map",
  template,
  styles: [ style ]
})
export class PestMapComponent implements OnInit {
  greeting: string;
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
    this.greeting = "Hello this is the pest map!";
    this.formdata = this.initdata;
    this.compName = "Pest Map";
  }

  ngOnInit() {
    this.data = this.pestMapDataService.getData().zone();
    this.data.subscribe((data) => {
        this.processing = false;
        this.centerLat = data[0].lat;
        this.centerLong = data[0].long;
    });
}

  addLocation(data){
    this.formdata.name = data.pestName;
    this.formdata.lat = data.lat;
    this.formdata.long = data.long;
    this.formdata.radius = data.rad;
    this.formdata.opacity = data.op;
    this.formdata.gradient = 25;
    PestLocationCollection.insert(this.formdata);
    this.formdata = this.initdata;
  }

  getCurrentLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) =>{
          this.formdata.lat = pos.coords.latitude;
          this.formdata.long = pos.coords.longitude;
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
  }
}
