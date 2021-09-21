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

  constructor(private _fb : FormBuilder) {
    this.myForm = this._fb.group({
      full_name : ["", Validators.required],
      email : ["", Validators.required],
      pass : ["", Validators.required]
    });
   }

  ngOnInit(): void {
  }

}
