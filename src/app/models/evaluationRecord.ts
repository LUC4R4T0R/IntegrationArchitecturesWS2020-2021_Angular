import {EvaluationRecordEntry} from "./evaluationRecordEntry";

export class EvaluationRecord{
  constructor(
    public year:number,
    public entries:EvaluationRecordEntry[]
  ) {  }
}
