import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../mobiles.service';
import { Product } from '../models/prodcut.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
 
  mobiles:Product[]=[]

  //inject obj od DataService class
 constructor(private mobObj:MobilesService){
 }

 ngOnInit():void{
   //obj initialisation logic
   this.mobiles=this.mobObj.getMobilesData()
 }

}
