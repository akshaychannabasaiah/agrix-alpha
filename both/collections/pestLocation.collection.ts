import { MongoObservable } from "meteor-rxjs";
import {PestLocation} from "../models/pestLocation.model";

export const PestLocationCollection = new MongoObservable.Collection<PestLocation>("pest-location-collection");
