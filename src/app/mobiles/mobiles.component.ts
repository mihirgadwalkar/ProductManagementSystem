import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/prodcut.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
 
  mobiles:Product[]=[]

  //inject obj od DataService class
 constructor(private dsObj:DataService){
 }

 ngOnInit():void{
   //obj initialisation logic
   this.mobiles=this.dsObj.getMobilesData()
 }

}
