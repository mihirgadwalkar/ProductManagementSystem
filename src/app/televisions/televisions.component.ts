import { Component, OnInit } from '@angular/core';
import { Product } from '../models/prodcut.model';
import { TelevisionsService } from '../televisions.service';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit{

  televisions:Product[]=[]
  
  //injecting obj of DataService class
  constructor(private tvObj:TelevisionsService){
  }
  
  ngOnInit():void{
    //obj initialisation
    this.televisions=this.tvObj.getTelevisionsData()
  }

}
