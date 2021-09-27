import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../services/login-auth.service';
import { Router } from '@angular/router';

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

  errorMsg = "";
  
  constructor(private _loginAuth : LoginAuthService, private _router : Router) { }

  ngOnInit(): void {
  }

  do_login(){
    // console.log(this.user);
    this._loginAuth.auth(this.user).subscribe((result)=>{
      // console.log(result);

      localStorage.setItem("token", result);
      /*
        localStorage.setItem("property", value)
        localStorage.getItem("property")
        localStorage.removeItem("property")


      */



      this._router.navigate(["/"]);

    }, (serverError)=>{
      console.log(serverError.error);
      if(serverError.error.type ==1)
      {
        this.errorMsg="This Username/Email and Password is Incorrect";
      }
      if(serverError.error.type==2){
        this.errorMsg="This Password is Incorrect";

      }
    })
  }

}
