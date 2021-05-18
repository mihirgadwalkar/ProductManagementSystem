import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/prodcut.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  //to receive data from parent as input
  @Input() productObj:Product;
}
