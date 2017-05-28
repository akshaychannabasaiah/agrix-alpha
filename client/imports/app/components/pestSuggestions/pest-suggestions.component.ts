import { Component, OnInit } from "@angular/core";
import template from "./pest-suggestions.component.html";
import style from "./pest-suggestions.component.scss";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { PestService } from "../../services/pest.service";
import { Pest } from "../../../../../both/models/pest.model";
import { Pesticide } from "../../../../../both/models/pesticide.model";

import { Observable } from "rxjs";

@Component({
  selector: "pest-suggestions",
  template,
  styles: [ style ]
})
export class PestSuggestionsComponent implements OnInit {
  compName: string;
  displayingIcon = 0;
  processing: boolean = true;
  id: number;
  sub: any;
  pestInfo: any;
  pests: Observable<Pest[]>;
  chartData: any = {
    datasets: [{
      label: '',
      data: [],
      backgroundColor: []
    }],
    labels: [],
  };
  type = "horizontalBar";
  sortType: boolean[]=[true,false,false];

   pestData: any[] = [
    {
      id: 0,
      name: 'Corn Weevil',
      icon: "/images/corn_weevil.jpg",
      },
    {
      id: 1,
      name: 'Aphid',
      icon: "/images/aphid.jpg",
      },
    {
      id: 2,
      name: 'Army worm',
      icon: "/images/armyworm.jpg",
      },
    {
      id: 3,
      name: 'Pollen Beetle',
      icon: "/images/pollen.jpg",
      },

  ];
  options: any = {
        legend: {
            display: true,
            labels: {
                fontColor: '#f24964'
            }
        }
};

  pesticidesByRating: any[]=[]; 
  pesticidesByFreq: any[]=[];
  pesticidesByPrice: any[]=[];

  pesticides: any[]=[
    {
      name: 'BASF Kevin',
      price: 1,
      rating: 5,
      times_used: 3 
  },
   {
      name: 'BASF Systrom',
      price: 2,
      rating: 2.8,
      times_used: 2 
  },
  {
      name: 'BASF AF',
      price: 3,
      rating: 1.6,
      times_used: 1 
  } 
  ]

selectedStyle:any = {border: '3px solid #fff' };
  styles:any=[{},{},{}];
  fieldsSelection : SelectItem[];

  constructor(private route: ActivatedRoute, private pestService: PestService,  public _router: Router) {
    this.compName = "Actions to";
    this.styles[0] = this.selectedStyle;
    
  }

compareBy(a,b) {
  if (a.val < b.val)
    return 1;
  if (a.val > b.val)
    return -1;
return 0;
}

  typeSelected(id: number){
    this.displayingIcon = id;
    this.styles=[{},{},{}];
    this.sortType = [false, false, false];
    this.sortType[id] = true;
    this.styles[id]=this.selectedStyle;
    if(id == 0){
      this.chartData.datasets[0].data = [];
      this.chartData.datasets[0].backgroundColor = [];
      this.chartData.datasets[0].label = "Rating";
      this.chartData.labels = [];
      this.pesticidesByRating.map(p => {
        this.chartData.datasets[0].data.push(p.val);
        this.chartData.datasets[0].backgroundColor.push('#f24964');
        this.chartData.labels.push(p.key);
      })
    }
    else if(id == 1){
      this.chartData.datasets[0].data = [];
      this.chartData.datasets[0].backgroundColor = [];
      this.chartData.datasets[0].label = "Price";
      this.chartData.labels = [];
      this.pesticidesByPrice.map(p => {
        this.chartData.datasets[0].data.push(p.val);
        this.chartData.datasets[0].backgroundColor.push('#f24964');
        this.chartData.labels.push(p.key);
      })
    }
    else if(id == 2){
      this.chartData.datasets[0].data = [];
      this.chartData.datasets[0].backgroundColor = [];
      this.chartData.datasets[0].label = "Frequency";
      this.chartData.labels = [];
      this.pesticidesByFreq.map(p => {
        this.chartData.datasets[0].data.push(p.val);
        this.chartData.datasets[0].backgroundColor.push('#f24964');
        this.chartData.labels.push(p.key);
      })
    }
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.pestInfo = this.pestData.filter( c => c.id === this.id)[0];
      this.compName = "Actions to " + this.pestInfo.name;
    });

     this.pests = this.pestService.getData().zone();
      this.pests.subscribe((pest) => {
        pest.map((f) => {
          if(f.name === this.pestInfo.name){
            f.pesticidesUsed.map(p => {
              this.pesticidesByFreq.push({key: p.name, val: p.usageCount});
              this.pesticidesByPrice.push({key: p.name, val: p.currentPrice});
              this.pesticidesByRating.push({key: p.name, val: p.rating});
            });
          }  
        });
        this.pesticidesByFreq.sort(this.compareBy);
        this.pesticidesByRating.sort(this.compareBy);
        this.pesticidesByPrice.sort(this.compareBy);
        this.chartData.datasets[0].data = [];
      this.chartData.datasets[0].backgroundColor = [];
      this.chartData.datasets[0].label = "Rating";
      this.chartData.labels = [];
      this.pesticidesByRating.map(p => {
        this.chartData.datasets[0].data.push(p.val);
        this.chartData.datasets[0].backgroundColor.push('#f24964');
        this.chartData.labels.push(p.key);
      })
        this.processing = false;
        console.log(this.pesticidesByFreq, this.pesticidesByPrice, this.pesticidesByRating);
    });
  }
}
