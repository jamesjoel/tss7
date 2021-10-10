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

  getById(id:any){
    return this._http.get<any>(this.apiUrl+"/"+id);
  }

  update(obj:any){
    return this._http.put<any>(this.apiUrl+"/"+obj._id, obj);
  }

  add(obj:any){
    return this._http.post<any>(this.apiUrl, obj);
  }
  delete(id:any){
    return this._http.delete<any>(this.apiUrl+"/"+id);
    // http://localhost:3000/api/teacher/458
  }

}
