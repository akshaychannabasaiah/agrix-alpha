import { Injectable } from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import { Observable } from 'rxjs';
import { Field } from "../../../../both/models/field.model";
import { FieldCollection } from "../../../../both/collections/field.collection";

@Injectable()
export class FieldDataService {
  private data: Observable<Field[]>;

  constructor() {
    this.data = FieldCollection.find({}).debounce(() => ObservableCursor.interval(150)).zone();
  }

  public getData(): Observable<Field[]> {
    return this.data;
  }
}
