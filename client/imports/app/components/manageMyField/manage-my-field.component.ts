import { Component, OnInit } from "@angular/core";
import template from "./manage-my-field.component.html";
import style from "./manage-my-field.component.scss";
import { FieldDataService } from "../../services/field-data.service";
import { Observable } from "rxjs";

import { Field } from "../../../../../both/models/field.model";
import { FieldCollection } from "../../../../../both/collections/field.collection";

@Component({
  selector: "manage-my-field",
  template,
  styles: [ style ]
})
export class ManageFieldComponent implements OnInit {
  processing : boolean = true;
  centerLat: number = 20;
  centerLong: number = 20;
  type: string = "doughnut";
  compName: string;
  fetchData: Observable<Field[]>;
  data: any = {
    datasets: [{
      data: [],
      backgroundColor: []
    }],

    labels: [],
    
  };

  options: any = {
        legend: {
            display: true,
            labels: {
                fontColor: '#fff'
            }
        }
};

/*
fields: any[]=[
    {
        id: 0,
        crop: 'Barley',
        name: 'Field 1',
        size: 87,
        lat: 35.00,
        long: 45.00,
        boundaries: [
          { lat: 30,  lng: 40 },
          { lat: 30,  lng: 50 },
          { lat: 40, lng: 50 },
          { lat: 40, lng: 40 },
          { lat: 30,  lng: 40 }
        ],
        color: '#E91E63'
    },
    {
        id: 1,
        crop: 'Maize',
        size: 73,
        name: 'Field 2',
        lat: 35.00,
        long: 47.00,
        boundaries: [
          { lat: 20,  lng: 40 },
          { lat: 20,  lng: 40 },
          { lat: 30, lng: 40 },
          { lat: 30, lng: 30 },
          { lat: 20,  lng: 30 }
        ],
        color: '#9C27B0'
    },
    {
        id: 2,
        name: 'Field 3',
        crop: 'Beets',
        size: 13,
        lat: 35.00,
        long: 46.00,
        boundaries: [
          { lat: 10,  lng: 20 },
          { lat: 10,  lng: 30 },
          { lat: 20, lng: 30 },
          { lat: 20, lng: 20 },
          { lat: 20,  lng: 20 }
        ],
        color: '#009688'
    },
    {
        id: 3,
        name: 'Field 4',
        crop: 'Wheat',
        size: 68,
        lat: 35.00,
        long: 49.00,
        boundaries: [
          { lat: 10,  lng: 20 },
          { lat: 10,  lng: 30 },
          { lat: 20, lng: 30 },
          { lat: 20, lng: 20 },
          { lat: 20,  lng: 20 }
        ],
        color: '#FF9800'
    },
  ];*/
  
  colors: any = ['#E91E63', '#9C27B0', '#009688', '#FF9800'] 


  constructor(private fieldDataService: FieldDataService) {
    this.compName = "Manage Fields";
    

  }

  ngOnInit() {
   this.fetchData = this.fieldDataService.getData().zone();
    this.fetchData.subscribe((fieldss) =>{
    
    fieldss.map((field, index) => {
    this.data.datasets[0].backgroundColor[index] = this.colors[index % 4];
    this.data.datasets[0].data.push(field.area);
    this.data.labels.push(field.cropType + " " + field.area + "ha");
    this.processing = false;
    })
      
  });
    /*
    this.fields.map( (field, index) => 
    {
      this.data.datasets[0].data.push(field.size);
      this.data.labels.push(field.crop + " " + field.size + "ha");
      this.data.datasets[0].backgroundColor.push(this.colors[index]); 
    });
    this.processing = false;*/
  }
}
