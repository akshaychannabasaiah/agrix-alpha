import { Field } from "./field.model";
export interface Farmer {
  email: string;
  cell: string;
  name: string;
  password: string;
  isFarmer: boolean;
  fields: Array<Field>;
}