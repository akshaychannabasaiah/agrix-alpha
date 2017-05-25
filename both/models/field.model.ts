import { Action } from "./action.model";
import { LocationCoOrdinates } from "./locationCoOrdinates.model";
export interface Field {
    name: string;
    area: number;
    cropType: string;
    location: Array<LocationCoOrdinates>,
    actions: Array<Action>
}