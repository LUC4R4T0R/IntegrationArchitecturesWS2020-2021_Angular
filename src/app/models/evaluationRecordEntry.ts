export class EvaluationRecordEntry{
  constructor(
    public name:string,
    public target:number,
    public actual:number,
    public bonus?:number
  ) {  }
}
