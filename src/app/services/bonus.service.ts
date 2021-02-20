import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {OrderEvaluation} from "../models/order-evaluation";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BonusService {

  constructor(private http:HttpClient) { }

  fetchOrderEvaluation(smId:number, year:number):Observable<HttpResponse<OrderEvaluation>>{
    return this.http.get<OrderEvaluation>('/api/salesman/' + smId + '/bonus/' + year + '/get_review', {observe: 'response'});
  }

  saveRemarks(smId:number, year:number, remarks:string):Observable<HttpResponse<string>>{
    return this.http.post('/api/salesman/'+smId+'/bonus/'+year+'/set_remarks', {remarks: remarks}, {observe: 'response', responseType: "text"});
  }
}
