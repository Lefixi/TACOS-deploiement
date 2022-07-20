import { Tacos } from "./tacos"
export interface Menu {
  name: string;
  price: number;
  tacos : Tacos[];
  _id : string;
}
