import { DemoCollection } from "../../../both/collections/demo.collection";
import { Demo } from "../../../both/models/demo.model";

import { PestLocationCollection } from "../../../both/collections/pestLocation.collection";
import { PestLocation } from "../../../both/models/pestLocation.model";
import { Farmer } from "../../../both/models/farmer.model";
import { Field } from "../../../both/models/field.model";
import { FarmerCollection } from "../../../both/collections/farmer.collection";
import { PestCollection } from "../../../both/collections/pest.collection";
import { ObservableCursor, MeteorObservable } from "meteor-rxjs/dist";
import { Action } from "../../../both/models/action.model";
import { Pesticide } from "../../../both/models/pesticide.model";

import { PestDataCollection } from "../../../both/collections/pestData.collection";
import { PestData } from "../../../both/models/pestData.model";

import { FieldCollection } from "../../../both/collections/field.collection";
import { FakeDB } from "./populatedb";

export class Main {
  start(): void {
    this.initFakeData();
  }

  initFakeData(): void {

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
      FakeDB.initData();
      this.processLoadedData();
    }

  }
  processLoadedData(): void {
    let farmerData: ObservableCursor<Farmer>;
    farmerData = FarmerCollection.find({});
    farmerData.fetch().forEach((farmer: Farmer) => {
      farmer.fields.forEach((field: Field) => {
        field.actions.forEach((action: Action) => {
          MeteorObservable.call("UpdateTableAfterActionAdded",action);
        });
      });
    });
  }
}

