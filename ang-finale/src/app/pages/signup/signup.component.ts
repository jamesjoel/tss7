import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';

// FormGroup ---- interface
// FormBuilder ---- service
// Validators ---- class

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm:FormGroup;

  a=false;
  msg="";

  constructor(
      private _fb : FormBuilder, 
      private _user : UserService,
      private _router : Router
      ) {
    this.myForm = this._fb.group({
      full_name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      pass : ["", Validators.required],
      re_pass : ["", Validators.required],
      contact : ["", Validators.required],
      city : ["", Validators.required]
    });

    // console.log(this.myForm);
   }

  ngOnInit(): void {
  }

  save(){

    if(this.myForm.invalid){
      this.a=true;
      return;
    }
    //console.log(this.myForm.value);
    let obj = this.myForm.value;

    this._user.add(obj).subscribe((result)=>{
      // console.log(result);
      this._router.navigate(["/login"]);
      
    })
  }

}
