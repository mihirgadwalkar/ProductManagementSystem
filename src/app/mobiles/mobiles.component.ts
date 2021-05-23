import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
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
  
   this.mobObj.getMobilesData().subscribe(
     data=>{
       this.mobiles=data
     },

     err=>{
       console.log("err is ",err )
     }
   ) 
 }

}
