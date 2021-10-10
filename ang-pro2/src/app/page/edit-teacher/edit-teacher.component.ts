import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import  { TeacherService } from '../../services/teacher.service';

interface Teacher{
  _id? : string | null;
  fullname : string;
  class : string;
  salary : number;
  subject : string;
}
@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  myForm : FormGroup;
  isSubmit = false;
  constructor(
    private _fb : FormBuilder, 
    private _actRoute : ActivatedRoute, 
    private _teacherServ : TeacherService,
    private _router : Router
    ) {

    // console.log(this._actRoute.snapshot.params.id);
    this.myForm = this._fb.group({
      _id : [""],
      fullname : ["", Validators.required],
      class : ["", Validators.required],
      subject : ["", Validators.required],
      salary : [null, Validators.required],
    });
    let id = this._actRoute.snapshot.params.id;
    this._teacherServ.getById(id).subscribe((result)=>{
      // console.log(result);
      this.myForm.setValue(result);
    })





    
   }

  ngOnInit(): void {
  }
  submit(){
    // console.log(this.myForm);
    if(this.myForm.invalid){
      this.isSubmit = true;
      return;
    }
    //console.log(this.myForm.value);
    this._teacherServ.update(this.myForm.value).subscribe(()=>{
      this._router.navigate(["/teacher"]);
    })
    
  }

}
