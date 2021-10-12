import { Directive } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {

  constructor(private _ele : ElementRef) {
    this._ele.nativeElement.style.backgroundColor = "red";
    this._ele.nativeElement.style.color = "blue";

   }
   @HostListener('click') demo(){
      this._ele.nativeElement.style.backgroundColor = "green";
   }
   @HostListener('dblclick') demo2(){
    this._ele.nativeElement.style.fontSize = "45px";
 }

}
