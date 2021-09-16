import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../services/myservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  check1 = false;
  check2 = 200;
  constructor(private a : MyserviceService) {
    
   }

  ngOnInit(): void {
  }

  hello(){
    this.a.demo();
  }

}
