import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserInfo():Observable<User>{
    return this.http.get<User>('/api/user/-1');
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>('/api/user');
  }
}
