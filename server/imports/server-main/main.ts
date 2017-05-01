import {DemoCollection} from "../../../both/collections/demo.collection";
import {Demo} from "../../../both/models/demo.model";

import {PestLocationCollection} from "../../../both/collections/pestLocation.collection";
import {PestLocation} from "../../../both/models/pestLocation.model";

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
        name: "Dotan",
        lat: 25.0000,
        long: 30.0000,
        radius: 25.0, 
        gradient: 0.3,
        opacity: 0.5
      },
      {
        name: "Fotan",
        lat: 25.0000,
        long: 32.0000,
        radius: 25.0, 
        gradient: 0.3,
        opacity: 0.5
      }
      ];
      data2.forEach((obj: PestLocation) => {
        PestLocationCollection.insert(obj);
      });
    }

  }
}
