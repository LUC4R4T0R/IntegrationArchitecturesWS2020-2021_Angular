import {Product} from "./product";

export class OrderEvaluation{
  constructor(
    public salesman_id:number,
    public year:number,
    public products:Product[],
    public remarks:string
  ) {  }
}
