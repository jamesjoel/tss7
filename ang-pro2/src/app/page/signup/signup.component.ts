import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userFrm : FormGroup;

  check=false;

  constructor(private _fb : FormBuilder) {
    this.userFrm = this._fb.group({
      full_name : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  signup(){
    this.check=true;
  }
}
