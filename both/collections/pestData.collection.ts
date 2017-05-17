import { MongoObservable } from "meteor-rxjs";
import { PestData } from "../models/pestData.model";

export const PestDataCollection = new MongoObservable.Collection<PestData>("pest-data-collection");
