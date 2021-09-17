import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Pro{
  _id? : null|string;
  name : string;
  price : number;
  description : string;
  category : string;
  image : string;
  discount : number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProducts:Pro[]=[];
  // Depe Injection
  constructor(private _http : HttpClient) {
    this._http.get<any>("http://localhost:3000/api/product").subscribe((result)=>{
      // console.log(result);
      this.allProducts = result;
    })
   }

  ngOnInit(): void {
  }

}
