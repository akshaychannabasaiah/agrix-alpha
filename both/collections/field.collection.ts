import { MongoObservable } from "meteor-rxjs";
import { Field } from "../models/field.model";

export const FieldCollection = new MongoObservable.Collection<Field>("field-collection");
