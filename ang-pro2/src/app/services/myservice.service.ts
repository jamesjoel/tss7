import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  name = "rohit";
  constructor() { }

  demo(){
    let a = 100;
    let b = 200;
    let c = a+b;
    console.log(c);
  }
}
