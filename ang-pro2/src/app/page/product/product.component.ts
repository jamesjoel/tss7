import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

interface Product{
  id? : number;
  title : string;
  price : number;
  description : string;
  category : string;
  image : string;
  rating: any;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  allProduct : Product[] = [];
  constructor(private _proServ : ProductService) {
    this._proServ.getAll().subscribe((result)=>{
      this.allProduct = result;
    })
   }

  ngOnInit(): void {
  }

}
