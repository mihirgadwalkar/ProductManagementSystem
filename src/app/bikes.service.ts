import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/prodcut.model';

@Injectable({
  providedIn: 'root'
})
export class BikesService {

    //inject HttpCLient service object
    constructor(private hc:HttpClient) { }

    getBikesData():Observable<Product[]>{
      return this.hc.get<Product[]>("assets/bikes.json")
    } 
}
