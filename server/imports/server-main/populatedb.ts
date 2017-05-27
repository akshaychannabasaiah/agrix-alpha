import { DemoCollection } from "../../../both/collections/demo.collection";
import { Demo } from "../../../both/models/demo.model";

import { PestLocationCollection } from "../../../both/collections/pestLocation.collection";
import { PestLocation } from "../../../both/models/pestLocation.model";

import { FarmerCollection } from "../../../both/collections/farmer.collection";
import { Farmer } from "../../../both/models/farmer.model";

import { PestDataCollection } from "../../../both/collections/pestData.collection";
import { PestData } from "../../../both/models/pestData.model";

import { FieldCollection } from "../../../both/collections/field.collection";
import { Field } from "../../../both/models/field.model";
export class FakeDB {
    public static initData(): void {
        

      data3.forEach((obj: Farmer) => {
        FarmerCollection.insert(obj);
      });

    }
}