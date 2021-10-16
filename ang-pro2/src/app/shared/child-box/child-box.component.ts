import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-child-box',
  templateUrl: './child-box.component.html',
  styleUrls: ['./child-box.component.css']
})
export class ChildBoxComponent implements OnInit {
  @Input() cityArr:any[];

  @Output() myEvent = new EventEmitter;
  @Output() event1 = new EventEmitter;

  childVar = {
    name : "rohit",
    age : 25
  }

  myName:any;

  constructor() { }

  ngOnInit(): void {
  }

  send(){
    this.myEvent.emit(this.childVar);
  }

  sendToParent(){
    this.event1.emit(this.myName);
    this.myName = "";
  }

}
