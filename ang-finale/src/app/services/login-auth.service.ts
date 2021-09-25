import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private _http : HttpClient) { }

  auth(obj:any){
    console.log("-------------", obj);
  }
}
