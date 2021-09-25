import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../services/login-auth.service';

interface UserAuth{
  username : string|null;
  password : string|null;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserAuth={
    username : "",
    password : ""
  };
  
  constructor(private _loginAuth : LoginAuthService) { }

  ngOnInit(): void {
  }

  do_login(){
    // console.log(this.user);
    this._loginAuth.auth(this.user);
  }

}
