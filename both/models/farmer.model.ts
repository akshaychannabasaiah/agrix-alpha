import { Field } from "./field.model";
export interface Farmer {
  id: number,
  email: string;
  cell: string;
  name: string;
  fields: Array<Field>;
  centerLat: number;
  centerLong: number;
}