import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Credentials } from "../models/credentials";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginPath:string = '/api/auth';
  loginState: boolean = false;

  constructor(private http:HttpClient) { }

  login(credentials:Credentials):Observable<any>{
    return this.http.post(this.loginPath, credentials, {responseType: 'text'});
  }

  logout():Observable<any>{
    console.log('logging out');
    return this.http.delete(this.loginPath);
  }

  isLoggedIn():Observable<boolean>{
    return this.http.get(this.loginPath).pipe(map(res => {
      if(res !== true){
        this.loginState = false;
        return false;
      }else{
        this.loginState = true;
        return true;
      }
    }));
  }
}
