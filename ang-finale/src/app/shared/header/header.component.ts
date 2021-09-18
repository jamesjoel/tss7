import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

interface Category{
  _id? : string|null;
  name : string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  allCategory : Category[] = [];
  constructor(private _cateService : CategoryService) {
    this._cateService.getData().subscribe((result)=>{
      this.allCategory = result;
    })
   }

  ngOnInit(): void {
  }

}
