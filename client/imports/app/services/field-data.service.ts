import { Injectable } from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import { Field } from "../../../../both/models/field.model";
import { FieldCollection } from "../../../../both/collections/field.collection";

@Injectable()
export class FieldDataService {
  private data: ObservableCursor<Field>;

  constructor() {
    this.data = FieldCollection.find({});
  }

  public getData(): ObservableCursor<Field> {
    return this.data;
  }
}
