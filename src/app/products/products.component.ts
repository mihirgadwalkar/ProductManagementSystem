import { Component } from '@angular/core';
import { Product } from '../models/prodcut.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products=[1,2,3,4,5,6,7,8]

}
