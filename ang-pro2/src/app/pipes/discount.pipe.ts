import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(a:any, b:any) {
    if(b >= 4){
      let x = a*10/100;
      return x;
    }
    else{
      return 0;
    }
  }

}
