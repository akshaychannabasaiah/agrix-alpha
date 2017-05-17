import {DemoCollection} from "../../../both/collections/demo.collection";
import {Demo} from "../../../both/models/demo.model";

import {PestLocationCollection} from "../../../both/collections/pestLocation.collection";
import {PestLocation} from "../../../both/models/pestLocation.model";

import {FarmerCollection} from "../../../both/collections/farmer.collection";
import {Farmer} from "../../../both/models/farmer.model";

import {PestDataCollection} from "../../../both/collections/pestData.collection";
import {PestData} from "../../../both/models/pestData.model";

export class Main {
  start(): void {
    this.initFakeData();
  }

  initFakeData(): void {
    if (DemoCollection.find({}).cursor.count() === 0) {
      const data: Demo[] = [{
        name: "Dotan",
        age: 25
      }, {
        name: "Liran",
        age: 26
      }, {
        name: "Uri",
        age: 30
      }];
      data.forEach((obj: Demo) => {
        DemoCollection.insert(obj);
      });
    }

    if (PestLocationCollection.find({}).cursor.count() === 0) {
      const data2: PestLocation[] = [{
        name: "test1",
        lat: 60.0000,
        long: 24.0000,
        radius: 1000.0, 
        gradient: 0.3,
        opacity: 0.4
      },
      {
        name: "test2",
        lat: 60.0000,
        long: 25.0000,
        radius: 1000.0, 
        gradient: 0.3,
        opacity: 0.7
      }
      ];
      data2.forEach((obj: PestLocation) => {
        PestLocationCollection.insert(obj);
      });
    }

    if (FarmerCollection.find({}).cursor.count() === 0) {
      const data3: Farmer[] = [{
        name: "John",
        email: "x@y.com",
        cell: "5555555555",
        password: "asdas", 
        isFarmer: true,
        fields: []
      }
      ];
      data3.forEach((obj: Farmer) => {
        FarmerCollection.insert(obj);
      });
    }

    if (PestDataCollection.find({}).cursor.count() === 0) {
      const data3: PestData[] = [{
        name: "Weevil",
        type: "fungi",
        lat: 35.00,
        long: 45.00, 
        radius: 10000,
        gradient: 50,
        opacity: 0.7,
        date: new Date()
      }
      ];
      data3.forEach((obj: PestData) => {
        PestDataCollection.insert(obj);
      });
    }

  }
}
