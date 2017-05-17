import { Component, OnInit } from "@angular/core";
import template from "./pest-suggestions.component.html";
import style from "./pest-suggestions.component.scss";

@Component({
  selector: "pest-suggestions",
  template,
  styles: [ style ]
})
export class PestSuggestionsComponent implements OnInit {
  compName: string;
  displayingIcon = 0;
  id: number;
  sortedPesticides: any[];
   pestData: any[] = [
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
      rating: 2.5,
      times_used: 2 
  },
  {
      name: 'BASF AF',
      price: 3,
      rating: 1,
      times_used: 1 
  } 
  ]

iconsToDisplay : any[]=[
   ['★', '◼', '◼'],['☆', '☐', '☐'] 
];

  constructor() {
    this.compName = "Actions to Corn Weevil";
    this.sortedPesticides = this.pesticides.sort(this.compareByRating);
  }

  compareByRating(a,b) {
  if (a.rating < b.rating)
    return -1;
  if (a.rating > b.rating)
    return 1;
  return 0;
}

compareByFreq(a,b) {
  if (a.times_used < b.times_used)
    return -1;
  if (a.times_used > b.times_used)
    return 1;
  return 0;
}

compareByCost(a,b) {
  if (a.price < b.price)
    return -1;
  if (a.price > b.price)
    return 1;
  return 0;
}

  typeSelected(id: number){
    this.displayingIcon = id;
    if(id == 0){
      this.sortedPesticides = this.pesticides.sort(this.compareByFreq);
    }
    else if(id == 1){
    this.sortedPesticides = this.pesticides.sort(this.compareByRating);  
    }
else{
  this.sortedPesticides = this.pesticides.sort(this.compareByCost);   
}
    
  }

  ngOnInit() {
  }
}
