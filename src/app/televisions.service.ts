import { Injectable } from '@angular/core';
import { Product } from './models/prodcut.model';

@Injectable({
  providedIn: 'root'
})
export class TelevisionsService {

  televisions:Product[]=[

    {
    productTitle:"Samsung The Frame",
    description: "Resolution: 55-inch Ultra HD 4k QLED, Supported Apps: Netflix, Amazon Prime, Hotstar, Refresh Rate: 120 Hz, Operating System: Tizen, Storage: 8 GB, Sound Output: 40 W, Color: Black",
    productImage:"https://techunfolded.com/wp-content/uploads/2020/10/Samsung-The-Frame-Smart-TV.png"
    },
    {
    productTitle:"OnePlus Q1 Series",
    description: "Resolution: 55-inch Ultra HD 4k QLED, Supported Apps: Netflix, Amazon Prime, Hotstar, Motion Rate: 480 Hz, Operating System: Android, Storage: 16 GB, Sound Output: 50 W, Color: Black",
    productImage:"https://techunfolded.com/wp-content/uploads/2020/10/OnePlus-Q1-Series-QLED-TV.png"
    },

    {
    productTitle:"SONY Bravia",
    description: "Resolution: 55-inch Ultra HD 4k TV, Supported Apps: Netflix, Amazon Prime, Hotstar,  Refresh Rate: 50 Hz, Operating System: Android, Storage: 16 GB, Sound Output: 20 W, Color: Black",
    productImage:"https://techunfolded.com/wp-content/uploads/2021/04/SONY-Bravia-Ultra-HD-4K-Android-TV.png"
    },

    {
    productTitle:"Samsung QA55Q60TAKXXL",
    description: "Resolution: 55-inch Ultra HD 4k QLED, Supported Apps: Netflix, Amazon Prime, Hotstar, Refresh Rate: 60 Hz, Operating System: Tizen, Storage: 8 GB, Sound Output: 20 W, Color: Black",
    productImage:"https://techunfolded.com/wp-content/uploads/2021/04/Samsung-4K-QLED-TV-2020.png"
    },

    {
    productTitle:"LG 65UM7290PTD",
    description: "Resolution: 65-inch Ultra HD 4k QLED, Supported Apps: Netflix, Amazon Prime, Hotstar, Refresh Rate: 50 Hz, Operating System: Web OS, Storage: 1.5 GB, Sound Output: 20 W, Color: Black",
    productImage:"https://techunfolded.com/wp-content/uploads/2020/10/LG-4K-Smart-LED-TV.png"
    },

    {
    productTitle:"Samsung The Serif Series",
    description: "Resolution: 49-inch Ultra HD 4k QLED, Supported Apps: Netflix, Amazon Prime, Hotstar, Refresh Rate: 60 Hz, Operating System: Tizen, Storage: 16 GB, Sound Output: 40 W, Color: White",
    productImage:"https://techunfolded.com/wp-content/uploads/2020/10/Samsung-The-Serif-Series-4K-Smart-TV.png"
    },

    {
    productTitle:"Compaq HEX",
    description: "Resolution: 55-inch Ultra HD 4k QLED, Supported Apps: Netflix, Amazon Prime, Hotstar, Refresh Rate: 60 Hz, Operating System: Android, Storage: 16 GB, Sound Output: 24 W, Color: Silver",
    productImage:"https://techunfolded.com/wp-content/uploads/2021/04/Compaq-4K-Smart-QLED-TV.png"
    },
  
    {
    productTitle:"iFFALCON by TCL",
    description: "Resolution: 55-inch Ultra HD 4k QLED, Supported Apps: Netflix, Amazon Prime, Hotstar, Refresh Rate: 60 Hz, Operating System: Android, Storage: 16 GB, Sound Output: 30 W, Color: Black",
    productImage:"https://techunfolded.com/wp-content/uploads/2020/10/iFFALCON-by-TCL-4K-QLED-TV.png"
    }
    ];

    getTelevisionsData():Product[]{
      return this.televisions
    }
}
