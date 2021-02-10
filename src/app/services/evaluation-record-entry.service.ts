import { Injectable } from '@angular/core';
import {EvaluationRecordEntry} from "../models/evaluationRecordEntry";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EvaluationRecordEntryService {

  constructor(private http:HttpClient) { }

  addEntry(id:number, year:number, entry:EvaluationRecordEntry):Observable<string>{
    return this.http.post('/api/salesman/' + id + '/evaluationrecord/' + year + '/entry', entry, {responseType: 'text'});
  }

  fetchEntries(id:number, year:number):Observable<EvaluationRecordEntry[]>{
    return this.http.get<EvaluationRecordEntry[]>('/api/salesman/' + id + '/evaluationrecord/' + year + '/entry');
  }

  deleteEntry(id:number, year:number, name:string):Observable<string>{
    return this.http.delete('/api/salesman/' + id + '/evaluationrecord/' + year + '/entry/' + name, {responseType: 'text'});
  }

  updateEntry(id:number, year:number, entry:EvaluationRecordEntry){
    return this.http.put('/api/salesman/' + id + '/evaluationrecord/' + year + '/entry', entry, {responseType: 'text'});
  }
}
