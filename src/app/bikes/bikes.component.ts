import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/prodcut.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikes:Product[]=[]

  //injecting obj of DataService class
  constructor(private dsObj:DataService){
  }
  
  ngOnInit():void{
    //obj initialisation
    this.bikes=this.dsObj.getBikesData()
  }
}
