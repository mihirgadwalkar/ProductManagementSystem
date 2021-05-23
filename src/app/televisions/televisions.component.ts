import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/prodcut.model';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit{

  televisions:Product[]=[]
  
  //injecting obj of DataService class
  constructor(private dsObj:DataService){
  }
  
  ngOnInit():void{
    //obj initialisation
    this.televisions=this.dsObj.getTelevisionsData()
  }

}
