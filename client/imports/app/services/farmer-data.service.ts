import { Injectable } from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import { Observable } from 'rxjs';
import { Farmer } from "../../../../both/models/farmer.model";
import { FarmerCollection } from "../../../../both/collections/farmer.collection";

@Injectable()
export class FarmerService {
  private data: Observable<Farmer[]>;

  constructor() {
    this.data = FarmerCollection.find({}).debounce(() => ObservableCursor.interval(500)).zone();
  }

  public getData(): Observable<Farmer[]> {
    return this.data;
  }
}
