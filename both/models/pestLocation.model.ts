export interface PestLocation {
  name: string;
  lat: number;
  long: number;
  radius: number;
  gradient: number;
  opacity: number;
  date?: string;
  field?: any;
}