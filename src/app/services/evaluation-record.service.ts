import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Salesman} from "../models/salesman";
import {EvaluationRecord} from "../models/evaluationRecord";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EvaluationRecordService {

  constructor(private http:HttpClient) { }

  getAllRecords(id:number):Observable<EvaluationRecord[]>{
    return this.http.get<EvaluationRecord[]>('/api/salesman/' + id + '/evaluationrecord');
  }

  getRecord(id:number, year:number):Observable<EvaluationRecord[]>{
    return this.http.get<EvaluationRecord[]>('/api/salesman/' + id + '/evaluationrecord/' + year);
  }
}
