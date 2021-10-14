import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  a = 13;

  name = "rohit verma";

  constructor() {
    console.log("welcome");
   }

  ngOnInit(): void {
  }

}

/*
var a = 3;
swich(a){
  case 1 : console.log("indore")
        break;
  case 2 : console.log("indore")
        break;
  case 3 : console.log("indore")
        break;

  default : 
}


*/
