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
    initData(): void {
        const data3: Farmer[] = [{
            name: "Generated Name 0",
            email: "generatedemail0@mailinator.net",
            cell: "+49 3623 2431",
            fields: [{
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
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
                        amount: 235,
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
                        amount: 235,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
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
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
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
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Corn Weevil",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
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
                        amount: 235,
                        pest: "Corn Weevil",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
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
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
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
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
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
                        amount: 235,
                        pest: "Corn Weevil",
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
                        amount: 235,
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
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
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
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
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
                        rating: 3,
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
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Corn Weevil",
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
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    }]
            }]
        }, {
            name: "Generated Name 1",
            email: "generatedemail1@mailinator.net",
            cell: "+49 3623 2431",
            fields: [{
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
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
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Oats",
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
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
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Wheat",
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
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
                        rating: 3,
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
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Corn Weevil",
                        pesticide: "BASF Kelvin",
                        price: 350,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
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
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
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
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Corn",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
                        pest: "Corn Weevil",
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
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Corn Weevil",
                        pesticide: "BASF Artett",
                        price: 250,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
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
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Grass",
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Barley",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Credo",
                        price: 264,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    }]
            }, {
                name: "North West Field",
                area: 1.45,
                cropType: "Corn",
                centerLat: 52.381895,
                centerLong: 13.813481,
                boundaries: [
                    { lat: 52.382885, lng: 13.807233 },
                    { lat: 52.385104, lng: 13.817499 },
                    { lat: 52.380810, lng: 13.819949 },
                    { lat: 52.378782, lng: 13.809276 },
                ],
                actions: [
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Oats",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Wheat",
                        date: new Date(2015, 7, 23),
                        amount: 235,
                        pest: "Corn Weevil",
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
                        pest: "Army worm",
                        pesticide: "Dupont Lexus",
                        price: 249,
                        rating: 3,
                        comments: ""
                    },
                    {
                        actionType: "Pesticide Spray",
                        cropType: "Grass",
                        date: new Date(2015, 7, 23),
                        amount: 235,
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
                        amount: 235,
                        pest: "Aphid",
                        pesticide: "Sygenta Omega 500F",
                        price: 241,
                        rating: 3,
                        comments: ""
                    }]
            }]
        }]
    }
}