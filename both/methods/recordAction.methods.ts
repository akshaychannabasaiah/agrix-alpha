import { FarmerCollection } from "../collections/farmer.collection";
import { Action } from "../models/action.model";
import { MeteorObservable } from "meteor-rxjs/dist";
import { Meteor } from "meteor/meteor";
import { PestCollection } from "../collections/pest.collection";
import { Pesticide } from "../models/pesticide.model";

export class RecordActionMethods {
 static   initMethod(): void {
        Meteor.methods(
            {
                RecordActionToDB(id: number, fieldName: string, action: Action): void {
                    FarmerCollection.update(
                        { 'id': id, 'fields.name': fieldName },
                        {
                            $push:
                            {
                                'fields.$.actions': action
                            }
                        });
                    Meteor.call("UpdateTableAfterActionAdded", action);
                },
                UpdateTableAfterActionAdded(action: Action): void {

                    if (PestCollection.find({ name: action.pest }).cursor.count() === 0) {
                        let pesticideArray = Array<Pesticide>();
                        pesticideArray.push(
                            {
                                averageUsage: action.amount,
                                currentPrice: action.price,
                                name: action.pesticide,
                                rating: action.rating,
                                usageCount: 1
                            }
                        )
                        PestCollection.insert({
                            name: action.pest,
                            pesticidesUsed: pesticideArray
                        }
                        )
                    }
                    else {
                        let newPesticideArray = PestCollection.find({ name: action.pest }).fetch()[0].pesticidesUsed;
                        var found = 0;
                        newPesticideArray.forEach((pesticide: Pesticide) => {
                            if (pesticide.name == action.pesticide) {
                                pesticide.averageUsage = ((pesticide.averageUsage * pesticide.usageCount) + action.amount) / (pesticide.usageCount + 1);
                                pesticide.currentPrice = ((pesticide.currentPrice * pesticide.usageCount) + action.price) / (pesticide.usageCount + 1);
                                pesticide.rating = ((pesticide.rating * pesticide.usageCount) + action.rating) / (pesticide.usageCount + 1);
                                pesticide.usageCount = pesticide.usageCount + 1;
                                found = 1;
                            }
                        })
                        if (found == 0) {
                            newPesticideArray.push(
                                {
                                    averageUsage: action.amount,
                                    currentPrice: action.amount,
                                    name: action.pesticide,
                                    rating: action.rating,
                                    usageCount: 1
                                }
                            );
                        }
                        PestCollection.update({ name: action.pest }, { $set: { pesticidesUsed: newPesticideArray } });
                    }
                }

            }

        );
    }
}