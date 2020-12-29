import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Salesman } from "../models/salesman";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SalesmanService {
  salesmanPath:string = '/api/salesman';

  constructor(private http:HttpClient) { }

  getAllSalesmen():Observable<Salesman[]>{
    return this.http.get<Salesman[]>(this.salesmanPath);
  }
}
