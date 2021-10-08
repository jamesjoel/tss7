import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TeacherService } from '../../services/teacher.service';
import { Router } from '@angular/router';

interface Teacher{
  _id? : string | null;
  fullname : string;
  class : string;
  salary : number;
  subject : string;
}

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  myForm : FormGroup;
  isSubmit = false;
  constructor(private _fb : FormBuilder, private _teacherServ : TeacherService, private _router : Router ) {
    this.myForm = this._fb.group({
      fullname : ["", Validators.required],
      class : ["", Validators.required],
      subject : ["", Validators.required],
      salary : [null, Validators.required],
    });
   }

  ngOnInit(): void {
  }

  submit(){
    // console.log(this.myForm);
    if(this.myForm.invalid){
      this.isSubmit = true;
      return;
    }
    // console.log(this.myForm.value);
    this._teacherServ.add(this.myForm.value).subscribe(()=>{
      this._router.navigate(["/teacher"]);
    })
  }

}
