import { MongoObservable } from "meteor-rxjs";
import { Farmer } from "../models/farmer.model";

export const FarmerCollection = new MongoObservable.Collection<Farmer>("farmer-collection");
