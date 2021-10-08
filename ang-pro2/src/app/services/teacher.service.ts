import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  apiUrl = "http://localhost:3000/api/teacher";
  constructor(private _http : HttpClient) { }

  getAll(){
    return this._http.get<any>(this.apiUrl);
  }
  add(obj:any){
    return this._http.post<any>(this.apiUrl, obj);
  }
}
