import { MongoObservable } from "meteor-rxjs";
import { Pest } from "../models/pest.model";

export const PestCollection = new MongoObservable.Collection<Pest>("pest-collection");
