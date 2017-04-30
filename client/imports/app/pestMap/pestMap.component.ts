import {Component, OnInit} from "@angular/core";
import { Observable } from "rxjs";
import { PestMapDataService } from "./pestMap-data.service";
import { PestLocation } from "../../../../both/models/pestLocation.model";
import template from "./pestMap.component.html";
import style from "./pestMap.component.scss";

@Component({
  selector: "pest-map",
  template,
  styles: [ style ]
})
export class PestMapComponent implements OnInit {
  greeting: string;
  data: Observable<PestLocation[]>;
  lat: number = 0;
  long: number = 0;

  constructor(private pestMapDataService: PestMapDataService) {
    this.greeting = "Hello this is the pest map!";
  }

  ngOnInit() {
    this.data = this.pestMapDataService.getData().zone();
  }

  makeMap(){
     this.lat = this.data[0].lat.toInt();
    this.long = this.data[0].long.toInt();
  }
}
