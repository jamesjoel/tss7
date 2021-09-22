import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private _fb : FormBuilder) {
    this.myForm = this._fb.group({
      full_name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      pass : ["", Validators.required]
    });

    console.log(this.myForm);
   }

  ngOnInit(): void {
  }

  save(){

    if(this.myForm.invalid){
      this.a=true;
      return;
    }
    console.log(this.myForm.value);

    
  }

}
