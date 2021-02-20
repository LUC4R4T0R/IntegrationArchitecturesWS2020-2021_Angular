import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Setting} from "../models/setting";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }

  getSetting(name: string):Observable<HttpResponse<Setting>>{
    return this.http.get<Setting>('/api/settings/'+name, {observe: 'response'});
  }

  updateSetting(setting: Setting):Observable<HttpResponse<String>>{
    return this.http.put('/api/settings', setting, {observe: 'response', responseType: 'text'});
  }
}
