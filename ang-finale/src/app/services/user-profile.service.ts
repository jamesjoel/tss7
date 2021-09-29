import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  
  constructor(private _http : HttpClient) { }

  getData(){
    let mytoken = localStorage.getItem("token") || '';
    
    // console.log(token);
    return this._http.get<any>("http://localhost:3000/api/user/profile", 
    {
      headers : { token : mytoken }
    });
  }
}
