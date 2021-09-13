import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  name="rohit";
  x = 20;
  constructor() { }

  ngOnInit(): void {
  }

  demo1(){
    let a = "indore";
    console.log(this.name);
    console.log(a);
  }
  demo2(){
    console.log("this is demo2 call by dblclick");
  }

  demo3(){
    console.log("this is DEMO3");
  }
  demo4(){
    console.log("this is DEMO 4");
  }

  demo5(){
    // console.log("this is DEMO 5");
    this.x++;
  }
  demo6(){
    this.x = 20;
  }


  demo7(){
    console.log("this is DEMO 7");
  }
  demo8(){
    console.log("this is DEMO 8");
  }

  demo9(){
    console.log("this is DEMO 9");
  }
  demo10(){
    console.log("this is DEMO 10");
  }
  demo11(){
    console.log("this is DEMO 11");
  }
}
