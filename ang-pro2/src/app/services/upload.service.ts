import { Injectable } from '@angular/core';
import { HttpClient, HttpContextToken } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private _http : HttpClient) { }

  do_upload(obj:any){
    return this._http.post<any>("http://localhost:3000/api/upload", obj);
  }
}
