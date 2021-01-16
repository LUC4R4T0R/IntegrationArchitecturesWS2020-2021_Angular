import {Customer} from "./customer";

export class Product{
  constructor(
    public name:string,
    public quantity:number,
    public customer:Customer,
    public bonus:number
  ) {  }
}
