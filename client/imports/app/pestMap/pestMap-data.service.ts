import { Injectable } from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import { PestLocation } from "../../../../both/models/pestLocation.model";
import { PestLocationCollection } from "../../../../both/collections/pestLocation.collection";

@Injectable()
export class PestMapDataService {
  private data: ObservableCursor<PestLocation>;

  constructor() {
    this.data = PestLocationCollection.find({});
  }

  public getData(): ObservableCursor<PestLocation> {
    console.log(this.data);
    return this.data;
  }
}
