import { Field } from "./field.model";
export interface Farmer {
  email: string;
  cell: string;
  name: string;
  fields: Array<Field>;
}