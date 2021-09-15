import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private _http : HttpClient) {
    this._http.get<any>("http://localhost:3000/api/teacher").subscribe((result)=>{
      console.log(result);
    })
   }

  ngOnInit(): void {
  }

}
