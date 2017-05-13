import { Action } from "./action.model";
export interface Field {
    name: string;
    area: number;
    cropType: string;
    actions: Array<Action>
}