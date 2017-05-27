import { DemoCollection } from "../../../both/collections/demo.collection";
import { Demo } from "../../../both/models/demo.model";

import { PestLocationCollection } from "../../../both/collections/pestLocation.collection";
import { PestLocation } from "../../../both/models/pestLocation.model";

import { FarmerCollection } from "../../../both/collections/farmer.collection";
import { Farmer } from "../../../both/models/farmer.model";

import { PestDataCollection } from "../../../both/collections/pestData.collection";
import { PestData } from "../../../both/models/pestData.model";

import { FieldCollection } from "../../../both/collections/field.collection";
import { Field } from "../../../both/models/field.model";
export class FakeDB {
    public static initData(): void {
        const data3: Farmer[] = [{
            id: 0,
            name: "Generated Name 0",
            email: "generatedemail0@mailinator.net",
            cell: "+49 3623 2431",
            fields: [{
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 201,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 229,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 223,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 203,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 226,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 216,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 241,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 220,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 218,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.373395,
                centerLong: 13.817874,
                boundaries: [
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.370235, lng: 13.813695 },
                    { lat: 52.374484, lng: 13.811411 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 203,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 234,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 217,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 212,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 220,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.375420,
                centerLong: 13.828375,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.374294, lng: 13.834663 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 201,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 236,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 234,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.381875,
                centerLong: 13.819248,
                boundaries: [
                    { lat: 52.382929, lng: 13.806998 },
                    { lat: 52.385191, lng: 13.817574 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382929, lng: 13.806998 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 234,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 238,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 204,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 223,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 225,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.378613,
                centerLong: 13.826757,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 221,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 234,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 210,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 3,
                        comments: ""
                    }]
            }]
        }, {
            id: 1,
            name: "Generated Name 1",
            email: "generatedemail1@mailinator.net",
            cell: "+49 3623 2431",
            fields: [{
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 224,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 204,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 221,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 231,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 206,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 225,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 226,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 201,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 209,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 215,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.373395,
                centerLong: 13.817874,
                boundaries: [
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.370235, lng: 13.813695 },
                    { lat: 52.374484, lng: 13.811411 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 200,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 215,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 215,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 213,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.375420,
                centerLong: 13.828375,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.374294, lng: 13.834663 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 212,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 233,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 232,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 240,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 221,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Barley",
                centerLat: 52.381875,
                centerLong: 13.819248,
                boundaries: [
                    { lat: 52.382929, lng: 13.806998 },
                    { lat: 52.385191, lng: 13.817574 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382929, lng: 13.806998 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 229,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 221,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 224,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 213,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.378613,
                centerLong: 13.826757,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 224,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 233,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 233,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 233,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 227,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 5,
                        comments: ""
                    }]
            }]
        }, {
            id: 2,
            name: "Generated Name 2",
            email: "generatedemail2@mailinator.net",
            cell: "+49 3623 2431",
            fields: [{
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 239,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 236,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 244,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 218,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 209,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 210,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 211,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 211,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 238,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 213,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.373395,
                centerLong: 13.817874,
                boundaries: [
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.370235, lng: 13.813695 },
                    { lat: 52.374484, lng: 13.811411 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 217,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 200,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 243,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 217,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.375420,
                centerLong: 13.828375,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.374294, lng: 13.834663 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 213,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 241,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 242,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 212,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.381875,
                centerLong: 13.819248,
                boundaries: [
                    { lat: 52.382929, lng: 13.806998 },
                    { lat: 52.385191, lng: 13.817574 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382929, lng: 13.806998 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 233,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 218,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 214,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 224,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.378613,
                centerLong: 13.826757,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 214,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 243,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 236,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 211,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 220,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 3,
                        comments: ""
                    }]
            }]
        }, {
            id: 3,
            name: "Generated Name 3",
            email: "generatedemail3@mailinator.net",
            cell: "+49 3623 2431",
            fields: [{
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 220,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 244,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 238,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 204,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 200,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Barley",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 230,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 234,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 204,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 217,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.373395,
                centerLong: 13.817874,
                boundaries: [
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.370235, lng: 13.813695 },
                    { lat: 52.374484, lng: 13.811411 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 239,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 243,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 212,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.375420,
                centerLong: 13.828375,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.374294, lng: 13.834663 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 244,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 217,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 221,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 226,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 216,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.381875,
                centerLong: 13.819248,
                boundaries: [
                    { lat: 52.382929, lng: 13.806998 },
                    { lat: 52.385191, lng: 13.817574 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382929, lng: 13.806998 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 242,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 232,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 243,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.378613,
                centerLong: 13.826757,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 234,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 204,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 230,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 220,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 5,
                        comments: ""
                    }]
            }]
        }, {
            id: 4,
            name: "Generated Name 4",
            email: "generatedemail4@mailinator.net",
            cell: "+49 3623 2431",
            fields: [{
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 224,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 204,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 223,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 236,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 237,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Barley",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 216,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 201,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 241,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 232,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 225,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.373395,
                centerLong: 13.817874,
                boundaries: [
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.370235, lng: 13.813695 },
                    { lat: 52.374484, lng: 13.811411 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 242,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 243,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 227,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 206,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 213,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Rye",
                centerLat: 52.375420,
                centerLong: 13.828375,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.374294, lng: 13.834663 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 221,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 223,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 215,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 222,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 200,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.381875,
                centerLong: 13.819248,
                boundaries: [
                    { lat: 52.382929, lng: 13.806998 },
                    { lat: 52.385191, lng: 13.817574 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382929, lng: 13.806998 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 213,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 223,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 226,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 226,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.378613,
                centerLong: 13.826757,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 220,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 226,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 224,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 216,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 216,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 231,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 234,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 211,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 241,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 231,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Rye",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 207,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 237,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 241,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 243,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 207,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.373395,
                centerLong: 13.817874,
                boundaries: [
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.370235, lng: 13.813695 },
                    { lat: 52.374484, lng: 13.811411 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 234,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 212,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Barley",
                centerLat: 52.375420,
                centerLong: 13.828375,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.374294, lng: 13.834663 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 207,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 242,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 225,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 237,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Rye",
                centerLat: 52.381875,
                centerLong: 13.819248,
                boundaries: [
                    { lat: 52.382929, lng: 13.806998 },
                    { lat: 52.385191, lng: 13.817574 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382929, lng: 13.806998 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 218,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 226,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 211,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 236,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 237,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.378613,
                centerLong: 13.826757,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 238,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 227,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 242,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 232,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 231,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 241,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 202,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 233,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 225,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 233,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 5,
                        comments: ""
                    }]
            }]
        }, {
            id: 5,
            name: "Generated Name 5",
            email: "generatedemail5@mailinator.net",
            cell: "+49 3623 2431",
            fields: [{
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 220,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 233,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 238,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 201,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 223,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 239,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 236,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 208,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Barley",
                centerLat: 52.373395,
                centerLong: 13.817874,
                boundaries: [
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.370235, lng: 13.813695 },
                    { lat: 52.374484, lng: 13.811411 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 240,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 233,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 214,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 208,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 217,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.375420,
                centerLong: 13.828375,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.374294, lng: 13.834663 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 230,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 231,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 238,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 222,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 207,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.381875,
                centerLong: 13.819248,
                boundaries: [
                    { lat: 52.382929, lng: 13.806998 },
                    { lat: 52.385191, lng: 13.817574 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382929, lng: 13.806998 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 217,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 203,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 220,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 209,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 225,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Rye",
                centerLat: 52.378613,
                centerLong: 13.826757,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 212,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 237,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 217,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 218,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 240,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 213,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 244,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 215,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Rye",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 239,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 231,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 243,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 230,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 207,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.373395,
                centerLong: 13.817874,
                boundaries: [
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.370235, lng: 13.813695 },
                    { lat: 52.374484, lng: 13.811411 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 240,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 236,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 227,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 223,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Barley",
                centerLat: 52.375420,
                centerLong: 13.828375,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.374294, lng: 13.834663 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 220,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 217,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 239,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 221,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.381875,
                centerLong: 13.819248,
                boundaries: [
                    { lat: 52.382929, lng: 13.806998 },
                    { lat: 52.385191, lng: 13.817574 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382929, lng: 13.806998 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 240,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 207,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 203,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 227,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.378613,
                centerLong: 13.826757,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 244,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 213,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Rye",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 206,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 212,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 220,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 214,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 3,
                        comments: ""
                    }]
            }]
        }, {
            id: 6,
            name: "Generated Name 6",
            email: "generatedemail6@mailinator.net",
            cell: "+49 3623 2431",
            fields: [{
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 226,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 225,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 208,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 212,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 207,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 234,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 241,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 230,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 237,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 215,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.373395,
                centerLong: 13.817874,
                boundaries: [
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.370235, lng: 13.813695 },
                    { lat: 52.374484, lng: 13.811411 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 231,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 227,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 222,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 222,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 233,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.375420,
                centerLong: 13.828375,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.374294, lng: 13.834663 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 231,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 209,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 231,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Barley",
                centerLat: 52.381875,
                centerLong: 13.819248,
                boundaries: [
                    { lat: 52.382929, lng: 13.806998 },
                    { lat: 52.385191, lng: 13.817574 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382929, lng: 13.806998 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 216,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 221,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 231,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 231,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.378613,
                centerLong: 13.826757,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 201,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 200,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 217,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 244,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 243,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 208,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 202,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 229,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 240,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 226,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 242,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 244,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 210,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 213,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.373395,
                centerLong: 13.817874,
                boundaries: [
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.370235, lng: 13.813695 },
                    { lat: 52.374484, lng: 13.811411 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 226,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 214,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 241,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 208,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 206,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.375420,
                centerLong: 13.828375,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.374294, lng: 13.834663 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 211,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 232,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 222,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 211,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 244,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.381875,
                centerLong: 13.819248,
                boundaries: [
                    { lat: 52.382929, lng: 13.806998 },
                    { lat: 52.385191, lng: 13.817574 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382929, lng: 13.806998 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 204,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 238,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 240,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 215,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 200,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.378613,
                centerLong: 13.826757,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 224,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 210,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 234,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 242,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 244,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Barley",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 217,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 200,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 217,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 3,
                        comments: ""
                    }]
            }]
        }, {
            id: 7,
            name: "Generated Name 7",
            email: "generatedemail7@mailinator.net",
            cell: "+49 3623 2431",
            fields: [{
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 227,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 221,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 234,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 209,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 214,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 204,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 220,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 212,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 202,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.373395,
                centerLong: 13.817874,
                boundaries: [
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.370235, lng: 13.813695 },
                    { lat: 52.374484, lng: 13.811411 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 207,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 200,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 222,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Rye",
                centerLat: 52.375420,
                centerLong: 13.828375,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.374294, lng: 13.834663 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 203,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 207,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 230,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 227,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 232,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Barley",
                centerLat: 52.381875,
                centerLong: 13.819248,
                boundaries: [
                    { lat: 52.382929, lng: 13.806998 },
                    { lat: 52.385191, lng: 13.817574 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382929, lng: 13.806998 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 229,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 211,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 218,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 223,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Barley",
                centerLat: 52.378613,
                centerLong: 13.826757,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 232,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 221,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 243,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 202,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 223,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Rye",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 239,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 218,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 231,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 216,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 238,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 227,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 213,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 210,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 243,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 208,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 3,
                        comments: ""
                    }]
            }]
        }, {
            id: 8,
            name: "Generated Name 8",
            email: "generatedemail8@mailinator.net",
            cell: "+49 3623 2431",
            fields: [{
                name: "North West Field",
                area: 1.45,
                cropType: "Rye",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 243,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 224,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 218,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 236,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Rye",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 224,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 234,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 227,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 206,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.373395,
                centerLong: 13.817874,
                boundaries: [
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.370235, lng: 13.813695 },
                    { lat: 52.374484, lng: 13.811411 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 230,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 210,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 218,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 206,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Barley",
                centerLat: 52.375420,
                centerLong: 13.828375,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.374294, lng: 13.834663 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 217,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 200,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 201,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 237,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.381875,
                centerLong: 13.819248,
                boundaries: [
                    { lat: 52.382929, lng: 13.806998 },
                    { lat: 52.385191, lng: 13.817574 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382929, lng: 13.806998 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 217,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 238,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 234,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 206,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 221,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.378613,
                centerLong: 13.826757,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 240,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 211,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 238,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 204,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 217,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 240,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 222,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 206,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 238,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 208,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 223,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 212,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Rye",
                centerLat: 52.373395,
                centerLong: 13.817874,
                boundaries: [
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.370235, lng: 13.813695 },
                    { lat: 52.374484, lng: 13.811411 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 231,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 211,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 209,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Barley",
                centerLat: 52.375420,
                centerLong: 13.828375,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.374294, lng: 13.834663 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 203,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 209,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 228,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 219,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 229,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.381875,
                centerLong: 13.819248,
                boundaries: [
                    { lat: 52.382929, lng: 13.806998 },
                    { lat: 52.385191, lng: 13.817574 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382929, lng: 13.806998 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 220,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Army worm",
                        pesticide: "BASF Elando",
                        price: 275,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 229,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 220,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 212,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 5,
                        comments: ""
                    }]
            }]
        }, {
            id: 9,
            name: "Generated Name 9",
            email: "generatedemail9@mailinator.net",
            cell: "+49 3623 2431",
            fields: [{
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 224,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 227,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 208,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 225,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 200,
                        pest: "Pollen Beetle",
                        pesticide: "Bayer Biscaya",
                        price: 351,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 207,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 204,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 227,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 240,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Rye",
                centerLat: 52.373395,
                centerLong: 13.817874,
                boundaries: [
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.370235, lng: 13.813695 },
                    { lat: 52.374484, lng: 13.811411 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 202,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 204,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 225,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 225,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 240,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.375420,
                centerLong: 13.828375,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.374294, lng: 13.834663 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 210,
                        pest: "Aphid",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 207,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 215,
                        pest: "Aphid",
                        pesticide: "Dupont Duplosan",
                        price: 145,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 209,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 215,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 4,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Barley",
                centerLat: 52.381875,
                centerLong: 13.819248,
                boundaries: [
                    { lat: 52.382929, lng: 13.806998 },
                    { lat: 52.385191, lng: 13.817574 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382929, lng: 13.806998 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 209,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 220,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 203,
                        pest: "Pollen Beetle",
                        pesticide: "Sygenta Quadris",
                        price: 214,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 209,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 226,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.378613,
                centerLong: 13.826757,
                boundaries: [
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.382834, lng: 13.830261 },
                    { lat: 52.378525, lng: 13.832446 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.376547, lng: 13.822161 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 224,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 207,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 202,
                        pest: "Corn Weevil",
                        pesticide: "Dupont Artus",
                        price: 345,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 223,
                        pest: "Army worm",
                        pesticide: "Sygenta Durivo",
                        price: 197,
                        rating: 5,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.381895,
                centerLong: 13.813489,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.382885, lng: 13.807233 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 230,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 220,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 202,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 210,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 243,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.377669,
                centerLong: 13.815714,
                boundaries: [
                    { lat: 52.378782, lng: 13.809276 },
                    { lat: 52.380863, lng: 13.820009 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 242,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 205,
                        pest: "Corn Weevil",
                        pesticide: "Sygenta Axial",
                        price: 263,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 242,
                        pest: "Pollen Beetle",
                        pesticide: "BASF Medax",
                        price: 185,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 227,
                        pest: "Corn Weevil",
                        pesticide: "Bayer Proline",
                        price: 216,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 225,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.373395,
                centerLong: 13.817874,
                boundaries: [
                    { lat: 52.374484, lng: 13.811411 },
                    { lat: 52.376547, lng: 13.822161 },
                    { lat: 52.372314, lng: 13.824232 },
                    { lat: 52.370235, lng: 13.813695 },
                    { lat: 52.374484, lng: 13.811411 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 211,
                        pest: "Army worm",
                        pesticide: "Bayer Decis Forte",
                        price: 267,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 216,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Rye",
                        date: new Date(2015, 7, 23),
                        amount: 214,
                        pest: "Pollen Beetle",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 5,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 201,
                        pest: "Aphid",
                        pesticide: "Bayer Aviator Xpro",
                        price: 254,
                        rating: 4,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 202,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 5,
                        comments: ""
                    }]
            }]
        }];

        data3.forEach((obj: Farmer) => {
            FarmerCollection.insert(obj);
        });

    }
}