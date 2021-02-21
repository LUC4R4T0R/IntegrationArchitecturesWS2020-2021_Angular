import {Product} from "./product";
import {EvaluationRecordEntry} from "./evaluationRecordEntry";

export class OrderEvaluation{
  constructor(
    public salesman_id:number,
    public year:number,
    public products:Product[],
    public performance:EvaluationRecordEntry[],
    public hrApproved: boolean = false,
    public managementApproved: boolean = false,
    public salesmanApproved: boolean = false,
    public remarks:string
  ) {  }
}
