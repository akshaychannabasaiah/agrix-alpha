import { Action } from "../../../both/models/action.model";
import { Pesticide } from "../../../both/models/pesticide.model";
import { PestCollection } from "../../../both/collections/pest.collection";
import { FarmerCollection } from "../../../both/collections/farmer.collection";
import { MeteorObservable } from "meteor-rxjs/dist";

Meteor.methods(
    {
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
        },
        RecordActionToDB(id: number, fieldName: string, action: Action): void {
            FarmerCollection.update(
                { 'id': id, 'fields.name': fieldName },
                {
                    $push:
                    {
                        'fields.$.actions': action
                    }
                });
            MeteorObservable.call("UpdateTableAfterActionAdded", action);
        }

    });