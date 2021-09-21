import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

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
  constructor(private _proService : ProductService) {
    this._proService.getData().subscribe((result)=>{
      this.allProducts = result;
    })
   }

  ngOnInit(): void {
  }

}

/*
:3000/api/student
:3000/api/teacher
:3000/api/admin
:3000/api/user
:3000/api/user


Address :
----------------
----------------
----------------
Pin-code
452001



*/
