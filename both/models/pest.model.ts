import { Pesticide } from "./pesticide.model";

export interface Pest {
    name:string;
    pesticidesUsed:Array<Pesticide>;
}