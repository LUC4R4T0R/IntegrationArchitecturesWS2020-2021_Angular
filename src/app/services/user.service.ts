import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../models/user";
import {HttpClient, HttpResponse} from "@angular/common/http";

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

  updateUser(username: string, displayname: string, employeeId: number, group: number):Observable<HttpResponse<string>>{
    return this.http.put('/api/user', {
      username: username,
      displayname: displayname,
      employeeId: employeeId,
      group: group
    }, {
      observe: 'response',
      responseType: 'text'
    });
  }

  updatePassword(username:string, oldPassword:string, newPassword:string):Observable<HttpResponse<string>>{
    return this.http.put('/api/user/'+username+'/pw', {oldPw: oldPassword, newPw: newPassword}, {observe:'response', responseType: 'text'});
  }

  deleteUser(username: string):Observable<HttpResponse<string>>{
    return this.http.delete('/api/user/'+username,{observe: 'response', responseType: 'text'});
  }

  addUser(user: User):Observable<HttpResponse<string>>{
    return this.http.post('/api/user',
      user, {
      observe: 'response',
      responseType: 'text'
    });
  }
}
