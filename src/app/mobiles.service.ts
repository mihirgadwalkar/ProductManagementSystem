import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/prodcut.model';

@Injectable({
  providedIn: 'root'
})
export class MobilesService {

  /* private  mobiles:Product[]=[

    {
    productTitle:"Apple iPhone 12",
    description: "Ram - 4 GB, Camera - Rear Camera 12 MP + 12 MP & Front Camera	12 MP, Battery - 2815 mAh, Display - 6.1 inches",
    productImage:"https://images-na.ssl-images-amazon.com/images/I/71sNNCTfMuL._SL1500_.jpg"
    },
    {
    productTitle:"Vivo X60 Pro",
    description: "Ram - 12 GB, Camera - Rear Camera 48 MP + 13 MP & Front Camera	32 MP, Battery - 4200 mAh, Display - 6.56 inches",
    productImage:"https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/v/i/vivo_x60_pro-1.png"
    },

    {
    productTitle:"Samsung Galaxy A-72",
    description: "Ram - 8 GB, Camera - Rear Camera 64 MP + 12 MP & Front Camera	32 MP, Battery - 5000 mAh, Display - 6.7 inches",
    productImage:"https://images.samsung.com/is/image/samsung/assets/in/z-fold2-m.jpg"
    },

    {
    productTitle:"Xiaomi Mi10 5G",
    description: "Ram - 8 GB, Camera - Rear Camera 108 MP + 13 MP & Front Camera	20 MP, Battery - 4780 mAh, Display - 6.67 inches",
    productImage:"https://img1.ibay.com.mv/is1/full/2021/03/item_3300898_383.jpg"
    },

    {
    productTitle:"OnePlus 9R 5G",
    description: "Ram - 8 GB, Camera - Rear Camera 48 MP + 16 MP & Front Camera	16 MP, Battery - 4500 mAh, Display - 6.55 inches",
    productImage:"https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/07/oneplus-nord.png"
    },

    {
    productTitle:"Realme C25",
    description: "Ram - 4 GB, Camera - Rear Camera 13 MP + 4 MP & Front Camera	8 MP, Battery - 6000 mAh, Display - 6.50 inches",
    productImage:"https://img.router-switch.com/media/customoptions/68/1/1/realme-v5-5g-blue.jpg"
    },

    {
    productTitle:"Samsung Galaxy M-12",
    description: "Ram - 4 GB, Camera - Rear Camera 48 MP + 5 MP & Front Camera	8 MP, Battery - 6000 mAh, Display - 6.5 inches",
    productImage:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-m127gzwgins/gallery/in-galaxy-m12-m127-sm-m127gzwgins-thumb-405434708?$LazyLoad_Home_IMG$"
    },
  
    {
    productTitle:"Samsung Galaxy S-21 Ultra",
    description: "Ram - 12 GB, Camera - Rear Camera 108 MP + 12 MP & Front Camera	40 MP, Battery - 5000 mAh, Display - 6.8 inches",
    productImage:"https://www.gizmochina.com/wp-content/uploads/2020/11/Samsung-Galaxy-S21-Ultra-5G-500x500.jpg"
    }
    ];

    getMobilesData():Product[]{
      return this.mobiles
    } */

    //inject HttpCLient service object
    constructor(private hc:HttpClient) { }

    getMobilesData():Observable<Product[]>{
      return this.hc.get<Product[]>("assets/mobiles.json")
    }
}
