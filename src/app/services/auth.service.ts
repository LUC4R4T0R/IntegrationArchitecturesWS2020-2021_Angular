import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Credentials } from "../models/credentials";
import { Observable } from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginPath:string = '/api/auth';

  constructor(private http:HttpClient) { }

  login(credentials:Credentials):Observable<any>{
    return this.http.post(this.loginPath, credentials, {responseType: 'text'});
  }

  logout(){
    this.http.delete(this.loginPath);
  }

  isLoggedIn():Observable<boolean>{
    return this.http.get(this.loginPath).pipe(map(res => {
      if(res !== true){
        return false;
      }else{
        return true;
      }
    }));
  }

  getUserInfo(){

  }
}
