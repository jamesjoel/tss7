import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Abc{
  id : null|number;
  email : string;
  first_name : string;
  last_name : string;
  avatar : string;
  demo? : null|any;
}

/*
interface Product {
  id : null;
  title : string;
  price : number;
  description : strng;
  image : string;
  rating : any;
}
*/

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {
  allData:Abc[] = [];
  total=0;

  // allData:Data[]=[];
  // allData:Product[]=[];

  constructor(private _http : HttpClient) {
    this._http.get<any>("https://reqres.in/api/users?page=2").subscribe((result)=>{
      console.log(result.data);
      this.allData = result.data;
      this.total = this.allData.length;
    });
   }
  // (public a : HttpClient, private a: HttpClient)

  ngOnInit(): void {
  }

}
