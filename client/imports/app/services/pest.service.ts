import { Injectable } from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import { Pest } from "../../../../both/models/pest.model";
import { PestCollection } from "../../../../both/collections/pest.collection";
import { Observable } from 'rxjs'; 

@Injectable()
export class PestService {
  private data: Observable<Pest[]>;

  constructor() {
    this.data = PestCollection.find({}).debounce(() => ObservableCursor.interval(150)).zone();
  }

  public getData(): Observable<Pest[]> {
    return this.data;
  }
}
