import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { LoginAuthService } from '../services/login-auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {

  constructor(private _loginAuth : LoginAuthService, private _router : Router){

  }

  canActivate(){
    if(this._loginAuth.isLoggedIn()){
      return true;
    }
    else{
      this._router.navigate(["/login"]);
      return false;
    }
  }
  
}
