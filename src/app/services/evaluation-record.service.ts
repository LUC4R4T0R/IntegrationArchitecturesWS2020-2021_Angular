import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {EvaluationRecord} from "../models/evaluationRecord";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EvaluationRecordService {

  constructor(private http:HttpClient) { }

  getAllRecords(id:number):Observable<HttpResponse<EvaluationRecord[]>>{
    return this.http.get<EvaluationRecord[]>('/api/salesman/' + id + '/evaluationrecord', {observe: 'response'});
  }

  deleteRecord(id:number, year:number):Observable<HttpResponse<String>>{
    return this.http.delete('/api/salesman/' + id + '/evaluationrecord/' + year, {observe: 'response', responseType: 'text'});
  }

  addRecord(id:number, record:EvaluationRecord):Observable<HttpResponse<string>>{
    return this.http.post('/api/salesman/' + id + '/evaluationrecord/', record, {observe: 'response', responseType: 'text'});
  }
}
