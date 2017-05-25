import { Action } from "./action.model";
import { LatLngLiteral } from 'angular2-google-maps/core';

export interface Field {
    name: string;
    area: number;
    cropType: string;
    boundaries: Array<LatLngLiteral>;
    actions: Array<Action>;
    centerLat: number;
    centerLong: number;
}