import { Component, OnInit } from "@angular/core";
import template from "./pest-data.component.html";
import style from "./pest-data.component.scss";
import { Observable } from "rxjs";
import { PestMapDataService } from "../../services/pestMap-data.service";
import { PestLocation } from "../../../../../both/models/pestLocation.model";
import { PestLocationCollection } from "../../../../../both/collections/pestLocation.collection";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "pest-data",
  template,
  styles: [ style ]
})
export class PestDataComponent implements OnInit {
  compName: string;
  pest: any ={}; 
  id: number;
  private sub: any;
  data: Observable<PestLocation[]>;
  centerLat = 0;
  centerLong = 0;
  processing: Boolean = true;

  compData: any[] = [
    {
      id: 0,
      name: 'Corn Weevil',
      icon: "/images/Corn_weevil.jpg",
      info1: "Breeds between 15 and 35 °C",
      info2: "Breeds between 15 and 35 °C",
      info3: "Breeds between 15 and 35 °C",
    },
    {
      id: 1,
      name: 'White Mildew',
      icon: "/images/Corn_weevil.jpg",
      info1: "Breeds between 15 and 35 °C",
      info2: "Breeds between 15 and 35 °C",
      info3: "Breeds between 15 and 35 °C",
    },
    {
      id: 2,
      name: 'Rough Pigweed',
      icon: "/images/Corn_weevil.jpg",
      info1: "Breeds between 15 and 35 °C",
      info2: "Breeds between 15 and 35 °C",
      info3: "Breeds between 15 and 35 °C",
    },
    {
      id: 3,
      name: 'Frost',
      icon: "/images/Corn_weevil.jpg",
      info1: "Breeds between 15 and 35 °C",
      info2: "Breeds between 15 and 35 °C",
      info3: "Breeds between 15 and 35 °C",
    },

  ] 

  constructor(private pestMapDataService: PestMapDataService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.pest = this.compData.filter( c => c.id === this.id)[0];
      this.compName = this.pest.name;
      this.processing = false;
 });

this.data = this.pestMapDataService.getData().zone();
    this.data.subscribe((data) => {
        this.processing = false;
        this.centerLat = data[0].lat;
        this.centerLong = data[0].long;
    });

  }



}
