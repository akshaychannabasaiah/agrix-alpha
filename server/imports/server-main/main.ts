import { DemoCollection } from "../../../both/collections/demo.collection";
import { Demo } from "../../../both/models/demo.model";

import { PestLocationCollection } from "../../../both/collections/pestLocation.collection";
import { PestLocation } from "../../../both/models/pestLocation.model";
import { Farmer } from "../../../both/models/farmer.model";
import { Field } from "../../../both/models/field.model";
import { FarmerCollection } from "../../../both/collections/farmer.collection";
import { PestCollection } from "../../../both/collections/pest.collection";
import { ObservableCursor } from "meteor-rxjs/dist";
import { Action } from "../../../both/models/action.model";
import { Pesticide } from "../../../both/models/pesticide.model";

export class Main {
  start(): void {
    this.initFakeData();
  }

  initFakeData(): void {
    if (DemoCollection.find({}).cursor.count() === 0) {
      const data: Demo[] = [{
        name: "Dotan",
        age: 25
      }, {
        name: "Liran",
        age: 26
      }, {
        name: "Uri",
        age: 30
      }];
      data.forEach((obj: Demo) => {
        DemoCollection.insert(obj);
      });
    }

    if (PestLocationCollection.find({}).cursor.count() === 0) {
      const data2: PestLocation[] = [{
        name: "test1",
        lat: 60.0000,
        long: 24.0000,
        radius: 1000.0,
        gradient: 0.3,
        opacity: 0.4
      },
      {
        name: "test2",
        lat: 60.0000,
        long: 25.0000,
        radius: 1000.0,
        gradient: 0.3,
        opacity: 0.7
      }
      ];
      data2.forEach((obj: PestLocation) => {
        PestLocationCollection.insert(obj);
      });
    }
    let newFields = Array<Field>();
    const data3: Farmer[] = [{
      name: "Grunheide Mark",
      email: "mark@gmail.com",
      cell: "+49 3623 2431",
      fields: [
        {
          name: "North West Field",
          area: 1.45,
          cropType: "Wheat",
          location: [
            { lat: 52.382885, long: 13.807233 },
            { lat: 52.385104, long: 13.817499 },
            { lat: 52.380810, long: 13.819949 },
            { lat: 52.378782, long: 13.809276 },
          ],
          actions: [
            {
              actionType: "Pesticide Spray",
              cropType: "Grass",
              date: new Date(2015, 7, 23),
              amount: 235,
              pest: "Aphid",
              pesticide: "BASF X",
              price: 370,
              comments: ""
            },
            {
              actionType: "Pesticide Spray",
              cropType: "Grass",
              date: new Date(2016, 6, 20),
              amount: 264,
              pest: "Aphid",
              pesticide: "BASF X",
              price: 375,
              comments: ""
            },

            {
              actionType: "Pesticide Spray",
              cropType: "Wheat",
              date: new Date(2017, 7, 6),
              amount: 251,
              pest: "Aphid",
              pesticide: "BASF X",
              price: 325,
              comments: ""
            },
          ]
        },
        {
          name: "West field",
          area: 1.67,
          cropType: "Wheat",
          location: [
            { lat: 52.378782, long: 13.809276 },
            { lat: 52.378782, long: 13.809276 },
            { lat: 52.376547, long: 13.822161 },
            { lat: 52.374484, long: 13.811411 },
          ],
          actions: [
            {
              actionType: "Pesticide Spray",
              cropType: "Wheat",
              date: new Date(2015, 7, 23),
              amount: 123,
              pest: "Leaf rust",
              pesticide: "BASF X",
              price: 323,
              comments: ""
            },
            {
              actionType: "Pesticide Spray",
              cropType: "",
              date: new Date(2016, 8, 3),
              amount: 145,
              pest: "Leaf rust",
              pesticide: "BASF z",
              price: 309,
              comments: ""
            },
            {
              actionType: "Pesticide Spray",
              cropType: "Wheat",
              date: new Date(2017, 5, 13),
              amount: 132,
              pest: "Leaf rust",
              pesticide: "BASF z",
              price: 383,
              comments: ""
            },

          ]
        },
        {
          name: "South West field",
          area: 1.43,
          cropType: "Oats",
          location: [
            { lat: 52.374484, long: 13.811411 },
            { lat: 52.376547, long: 13.822161 },
            { lat: 52.372314, long: 13.824232 },
            { lat: 52.370235, long: 13.813695 },
          ],
          actions: [
            {
              actionType: "Pesticide Spray",
              cropType: "Oats",
              date: new Date(2015, 7, 7),
              amount: 235,
              pest: "Scald",
              pesticide: "Yara 123",
              price: 211,
              comments: ""
            },
            {
              actionType: "Pesticide Spray",
              cropType: "Oats",
              date: new Date(2016, 7, 13),
              amount: 240,
              pest: "Scald",
              pesticide: "Yara 123",
              price: 234,
              comments: ""
            },
            {
              actionType: "Pesticide Spray",
              cropType: "Oats",
              date: new Date(2017, 5, 25),
              amount: 250,
              pest: "Scald",
              pesticide: "Yara abc",
              price: 245,
              comments: ""
            },

          ]
        },
        {
          name: "South East field",
          area: 1.98,
          cropType: "Barley",
          location: [
            { lat: 52.376547, long: 13.822161 },
            { lat: 52.378525, long: 13.832446 },
            { lat: 52.374294, long: 13.834663 },
            { lat: 52.372314, long: 13.824232 },
          ],
          actions: [
            {
              actionType: "Pesticide Spray",
              cropType: "Barley",
              date: new Date(2015, 7, 7),
              amount: 235,
              pest: "Scald",
              pesticide: "Yara 123",
              price: 211,
              comments: ""
            },
            {
              actionType: "Pesticide Spray",
              cropType: "Wheat",
              date: new Date(2016, 7, 13),
              amount: 240,
              pest: "Scald",
              pesticide: "Yara 123",
              price: 234,
              comments: ""
            },
            {
              actionType: "Pesticide Spray",
              cropType: "Barley",
              date: new Date(2017, 5, 25),
              amount: 250,
              pest: "Scald",
              pesticide: "Yara abc",
              price: 245,
              comments: ""
            },

          ]
        },
        {
          name: "East field",
          area: 1.82,
          cropType: "Wheat",
          location: [
            { lat: 52.376547, long: 13.822161 },
            { lat: 52.382834, long: 13.830261 },
            { lat: 52.378525, long: 13.832446 },
            { lat: 52.376547, long: 13.822161 },
          ],
          actions: [
            {
              actionType: "Pesticide Spray",
              cropType: "Wheat",
              date: new Date(2015, 7, 7),
              amount: 235,
              pest: "Scald",
              pesticide: "Yara 123",
              price: 211,
              comments: ""
            },
            {
              actionType: "Pesticide Spray",
              cropType: "Wheat",
              date: new Date(2016, 7, 13),
              amount: 240,
              pest: "Scald",
              pesticide: "Yara 123",
              price: 234,
              comments: ""
            },
            {
              actionType: "Pesticide Spray",
              cropType: "Wheat",
              date: new Date(2017, 5, 25),
              amount: 250,
              pest: "Scald",
              pesticide: "Yara abc",
              price: 245,
              comments: ""
            },

          ]
        },
        {
          name: "North East field",
          area: 2.04,
          cropType: "Grass",
          location: [
            { lat: 52.382929, long: 13.806998 },
            { lat: 52.385191, long: 13.817574 },
            { lat: 52.382834, long: 13.830261 },
            { lat: 52.376547, long: 13.822161 },
          ],
          actions: [
            {
              actionType: "Pesticide Spray",
              cropType: "Grass",
              date: new Date(2015, 7, 7),
              amount: 178,
              pest: "Army worm",
              pesticide: "Kemira Pest",
              price: 189,
              comments: ""
            },
            {
              actionType: "Pesticide Spray",
              cropType: "Grass",
              date: new Date(2016, 7, 13),
              amount: 198,
              pest: "Army worm",
              pesticide: "Kemira Pest",
              price: 189,
              comments: ""
            },
            {
              actionType: "Pesticide Spray",
              cropType: "Grass",
              date: new Date(2017, 5, 25),
              amount: 187,
              pest: "Army worm",
              pesticide: "Kemira Pest",
              price: 198,
              comments: ""
            }

          ]
        }

      ]
      // if (FarmerCollection.find({}).cursor.count() === 0) {
      //   const data3: Farmer[] = [{
      //     email: "abc@xy",
      //     cell: "cc",
      //     fields: [
      //       {
      //         name: "F1",
      //         area: 20.34,
      //         cropType: "Wheat",
      //         actions: [
      //           {
      //             actionType: "Pesticide Spray",
      //             date: new Date(2015, 7, 23),
      //             amount: 235,
      //             pest: "Corn Weevil",
      //             pesticide: "BASF X",
      //             price: 125,
      //             comments: ""
      //           }
      //         ]
      //       },
      //       {
      //         name: "F2",
      //         area: 30.34,
      //         cropType: "Barley",
      //         actions: [
      //           {
      //             actionType: "Pesticide Spray",
      //             date: new Date(2015, 5, 25),
      //             amount: 235,
      //             pest: "Corn Weevil",
      //             pesticide: "BASF X",
      //             price: 125,
      //             comments: ""
      //           }
      //         ]
      //       }
      //     ]
      //   }
      //   ];
      //   data3.forEach((obj: Farmer) => {
      //     FarmerCollection.insert(obj);
      //   });
      // }
      //FarmerCollection.update(FarmerCollection.findOne({ email: "abc@xy" }), { $set: { fields: newFields } });
      //FarmerCollection.update({ email: "abc@xy", "fields.name": "F1" }, { $set: { "fields.$.area": 111.0 } });
    }
  processLoadedData(): void {
      let farmerData: ObservableCursor<Farmer>;
    farmerData = FarmerCollection.find({});
      farmerData.fetch().forEach((farmer: Farmer) => {
        farmer.fields.forEach((field: Field) => {
          field.actions.forEach((action: Action) => {
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
                  pesticide.averageUsage = ((pesticide.averageUsage * pesticide.usageCount) + action.amount) / pesticide.usageCount + 1;
                  pesticide.currentPrice = ((pesticide.currentPrice * pesticide.usageCount) + action.price) / pesticide.usageCount + 1;
                  pesticide.rating = ((pesticide.rating * pesticide.usageCount) + action.rating) / pesticide.usageCount + 1;
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
                )
              }
              PestCollection.update({ pest: action.pest }, { $set: { pesticideArray: newPesticideArray } });
            }
          });
        });
      });

    }





}
