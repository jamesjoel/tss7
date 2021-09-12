import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  name = "rohit";
  age = 25;
  city = "indore";

  color = ["red", "green", "blue", "yellow", "pink"];

  student = [
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "nilesh",
      age : 23,
      city : "mumbai"
    },
    {
      name : "priya",
      age : 22,
      city : "pune"
    }
  ];









  constructor() {
    
   }
  ngOnInit(): void {

  }

  demo(){
    let a = "TSS";
    console.log(a);
    console.log(this.name);
  }

}

