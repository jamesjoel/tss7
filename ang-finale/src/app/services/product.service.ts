import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://localhost:3000/api/product";
  constructor(private _http : HttpClient) { }

  getData(){
    return this._http.get<any>(this.apiUrl);
  }


}
