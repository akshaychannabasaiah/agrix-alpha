import { Component, OnInit } from "@angular/core";
import template from "./manage-my-field.component.html";
import style from "./manage-my-field.component.scss";

@Component({
  selector: "manage-my-field",
  template,
  styles: [ style ]
})
export class ManageFieldComponent implements OnInit {
  processing : boolean = true;
  type: string = "doughnut";
  compName: string;
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


fields: any[]=[
    {
        id: 0,
        crop: 'Barley',
        name: 'Field 1',
        size: 87,
        lat: 35.00,
        long: 45.00
    },
    {
        id: 1,
        crop: 'Maize',
        size: 73,
        name: 'Field 2',
        lat: 35.00,
        long: 47.00
    },
    {
        id: 2,
        name: 'Field 3',
        crop: 'Beets',
        size: 13,
        lat: 35.00,
        long: 46.00
    },
    {
        id: 3,
        name: 'Field 4',
        crop: 'Wheat',
        size: 68,
        lat: 35.00,
        long: 49.00
    },
  ];

  colors: any = ['#E91E63', '#9C27B0', '#009688', '#FF9800'] 


  constructor() {
    this.compName = "Manage Fields";
    this.fields.map( (field, index) => 
    {
      this.data.datasets[0].data.push(field.size);
      this.data.labels.push(field.crop + " " + field.size + "ha");
      this.data.datasets[0].backgroundColor.push(this.colors[index]); 
    });
    this.processing = false;

  }

  ngOnInit() {
  }
}
