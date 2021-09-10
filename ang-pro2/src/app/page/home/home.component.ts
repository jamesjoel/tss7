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

