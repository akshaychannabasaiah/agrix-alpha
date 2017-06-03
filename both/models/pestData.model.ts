export interface PestData {
  _id?: string;
  name: string;
  type: string;
  lat: number;
  long: number;
  radius: number;
  gradient: number;
  opacity: number;
  date?: Date;
  field?: any;
}