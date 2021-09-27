import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { LoginAuthService } from '../../services/login-auth.service';

interface Category{
  _id? : string|null;
  title : string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  allCategory : Category[] = [];
  constructor(private _cateService : CategoryService, public _loginAuth : LoginAuthService) {
    this._cateService.getData().subscribe((result)=>{
      this.allCategory = result;
    })
   }

  ngOnInit(): void {
  }

}
