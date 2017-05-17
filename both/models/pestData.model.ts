export interface PestData {
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