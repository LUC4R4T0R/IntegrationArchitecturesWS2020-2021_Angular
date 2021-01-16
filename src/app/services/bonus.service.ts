import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {OrderEvaluation} from "../models/order-evaluation";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BonusService {

  constructor(private http:HttpClient) { }

  fetchOrderEvaluation(smId:number, year:number):Observable<OrderEvaluation>{
    return this.http.get<OrderEvaluation>('/api/salesman/' + smId + '/bonus/' + year + '/get_orders');
  }
}
