import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  check1 = false;
  check2 = 200;
  constructor() { }

  ngOnInit(): void {
  }

}
