import { Injectable } from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import { PestData } from "../../../../both/models/pestData.model";
import { PestDataCollection } from "../../../../both/collections/pestData.collection";

@Injectable()
export class PestMapDataService {
  private data: ObservableCursor<PestData>;

  constructor() {
    this.data = PestDataCollection.find({});
  }

  public getData(): ObservableCursor<PestData> {
    return this.data;
  }
}
