import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private _http : HttpClient, private _router : Router) { }

  auth(obj:any){
    // console.log("-------------", obj);
    return this._http.post<any>("http://localhost:3000/api/user/auth", obj);
  }
  
  isLoggedIn(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      
      return false;
    }

  }
  logout(){
    localStorage.removeItem("token");
    this._router.navigate(["/"]);
  }
}
