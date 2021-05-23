import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/prodcut.model';

@Injectable({
  providedIn: 'root'
})
export class TelevisionsService {

    //inject HttpCLient service object
    constructor(private hc:HttpClient) { }

    getTelevisionsData():Observable<Product[]>{
      return this.hc.get<Product[]>("assets/televisions.json")
    } 
}
