import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';

interface Teacher{
  _id? : string | null;
  fullname : string;
  class : string;
  salary : number;
  subject : string;
}

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  allTeacher : Teacher[] = [];
  teacher:any={};

  constructor(private _teacherServ : TeacherService){
    this._teacherServ.getAll().subscribe((result)=>{
      this.allTeacher = result;
    })
  }

  ngOnInit(): void {
  }
  askDelete(obj:any){
    // console.log(obj);
    this.teacher = obj;
  }

}
