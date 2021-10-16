import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  cityArr:any=[];
  city:any;


  b:any={};

  nameArr:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  rec(a:any){
    // console.log(a);
    this.b = a;
  }
  goToChild(){
    this.cityArr.push(this.city);
    this.city = "";
  }


  recFormChild(x:any){
    this.nameArr.push(x);
  }
}
