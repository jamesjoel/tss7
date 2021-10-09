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
  confDelete(){
    this._teacherServ.delete(this.teacher._id).subscribe((result)=>{
      //console.log("data deleted");
      let n = this.allTeacher.indexOf(this.teacher);
      this.allTeacher.splice(n, 1);
    })
  }

}


/*
let x = "indore";
let city = ["mumbai", "pune", "bhopal", "delhi", "indore", "ujjain"];

let n = city.indexOf(x);

city.splice(n, 1);


*/
