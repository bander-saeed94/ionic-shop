import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProdctsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdctsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProdctsProvider Provider');
  }

  getProdcuts(){
     return this.http.get('/assets/data.json');
  }
}
