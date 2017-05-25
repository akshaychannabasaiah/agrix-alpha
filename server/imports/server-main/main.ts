import {DemoCollection} from "../../../both/collections/demo.collection";
import {Demo} from "../../../both/models/demo.model";

import {PestLocationCollection} from "../../../both/collections/pestLocation.collection";
import {PestLocation} from "../../../both/models/pestLocation.model";

import {FarmerCollection} from "../../../both/collections/farmer.collection";
import {Farmer} from "../../../both/models/farmer.model";

import {PestDataCollection} from "../../../both/collections/pestData.collection";
import {PestData} from "../../../both/models/pestData.model";

import {FieldCollection} from "../../../both/collections/field.collection";
import {Field} from "../../../both/models/field.model";

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

    if (FieldCollection.find({}).cursor.count() === 0) {
      const data4: Field[] = [{
        
        cropType: 'Barley',
        name: 'Field 1',
        area: 87,
        centerLat: 35.00,
        centerLong: 45.00,
        boundaries: [
          { lat: 30,  lng: 40 },
          { lat: 30,  lng: 50 },
          { lat: 40, lng: 50 },
          { lat: 40, lng: 40 },
          { lat: 30,  lng: 40 }
        ],
        actions: []
    },
    
    {  
        cropType: 'Kaize',
        name: 'Field 2',
        area: 73,
        centerLat: 25.00,
        centerLong: 35.00,
        boundaries: [
          { lat: 20,  lng: 40 },
          { lat: 20,  lng: 40 },
          { lat: 30, lng: 40 },
          { lat: 30, lng: 30 },
          { lat: 20,  lng: 30 }
        ],
        actions: []
    },
    {
        
        cropType: 'Beets',
        name: 'Field 3',
        area: 13,
        centerLat: 15.00,
        centerLong: 25.00,
        boundaries: [
          { lat: 10,  lng: 20 },
          { lat: 10,  lng: 30 },
          { lat: 20, lng: 30 },
          { lat: 20, lng: 20 },
          { lat: 20,  lng: 20 }
        ],
        actions: []
    },
    {  
        cropType: 'Wheat',
        name: 'Field 4',
        area: 68,
        centerLat: 45.00,
        centerLong: 55.00,
        boundaries: [
          { lat: 40,  lng: 50 },
          { lat: 40,  lng: 60 },
          { lat: 50, lng: 60 },
          { lat: 50, lng: 50 },
          { lat: 40,  lng: 50 }
        ],
        actions: []
    },
      ];
      data4.forEach((obj: Field) => {
        FieldCollection.insert(obj);
      });
    }

  }
}
