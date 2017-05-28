import { DemoCollection } from "../../../both/collections/demo.collection";
import { Demo } from "../../../both/models/demo.model";

import { PestLocationCollection } from "../../../both/collections/pestLocation.collection";
import { PestLocation } from "../../../both/models/pestLocation.model";
import { Farmer } from "../../../both/models/farmer.model";
import { Field } from "../../../both/models/field.model";
import { FarmerCollection } from "../../../both/collections/farmer.collection";
import { PestCollection } from "../../../both/collections/pest.collection";
import { ObservableCursor } from "meteor-rxjs/dist";
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
          this.UpdateTableAfterActionAdded(action);
        });
      });
    });
  }
  UpdateTableAfterActionAdded(action: Action): void {

    if (PestCollection.find({ name: action.pest }).cursor.count() === 0) {
      let pesticideArray = Array<Pesticide>();
      pesticideArray.push(
        {
          averageUsage: action.amount,
          currentPrice: action.price,
          name: action.pesticide,
          rating: action.rating,
          usageCount: 1
        }
      )
      PestCollection.insert({
        name: action.pest,
        pesticidesUsed: pesticideArray
      }
      )
    }
    else {
      let newPesticideArray = PestCollection.find({ name: action.pest }).fetch()[0].pesticidesUsed;
      var found = 0;
      newPesticideArray.forEach((pesticide: Pesticide) => {
        if (pesticide.name == action.pesticide) {
          pesticide.averageUsage = ((pesticide.averageUsage * pesticide.usageCount) + action.amount) / (pesticide.usageCount + 1);
          pesticide.currentPrice = ((pesticide.currentPrice * pesticide.usageCount) + action.price) / (pesticide.usageCount + 1);
          pesticide.rating = ((pesticide.rating * pesticide.usageCount) + action.rating) / (pesticide.usageCount + 1);
          pesticide.usageCount = pesticide.usageCount + 1;
          found = 1;
        }
      })
      if (found == 0) {
        newPesticideArray.push(
          {
            averageUsage: action.amount,
            currentPrice: action.amount,
            name: action.pesticide,
            rating: action.rating,
            usageCount: 1
          }
        );
      }
      PestCollection.update({ name: action.pest }, { $set: { pesticidesUsed: newPesticideArray } });
    }
  }

}

