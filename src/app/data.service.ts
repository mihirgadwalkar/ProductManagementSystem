import { Injectable } from '@angular/core';
import { Product } from './models/prodcut.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private  mobiles:Product[]=[

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
    }

    bikes:Product[]=[

      {
      productTitle:"Bajaj Pulsar NS125",
      description: "Displacement - 124.45 cc, Mileage - 48 kmpl(Owner Reported), Transmission - 5 Speed Manual, Kerb Weight - 144 kg",
      productImage:"https://www.wheelsupdates.com/wp-content/uploads/2021/04/Bajaj-Pulsar-NS125-price-and-specs.jpg"
      },
      {
      productTitle:"Joy e-bike Monster",
      description: "Riding Range - 75 Km, Battery Charging Time - 4-4.5 Hrs, Rated Power - 250 W, Seat Height - 780 mm",
      productImage:"https://bd.gaadicdn.com/processedimages/joye-bike/beast/640X309/beast607ea27e93cd7.jpg?tr=w-300"
      },
  
      {
      productTitle:"Aprilia SR 125",
      description: "Displacement - 124.45 cc, Mileage - 40 kmpl(Owner Reported), Kerb Weight - 115 kg, Seat Height - 780 mm",
      productImage:"https://imgd.aeplcdn.com//642x361//bw/ec/33108/Aprilia-SR125-First-Ride-Review-118836.jpg?wm=2"
      },
  
      {
      productTitle:"Suzuki Burgman Street 125",
      description: "Displacement - 124 cc, Mileage - 47 kmpl(Owner Reported), Kerb Weight - 110 kg, Seat Height - 780 mm",
      productImage:"https://imgd.aeplcdn.com//642x361//bw/ec/35607/Suzuki-Burgman-Street-125-Action-133119.jpg?wm=2"
      },
  
      {
      productTitle:"Royal Enfield Himalayan",
      description: "Displacement - 411 cc, Mileage - 30 kmpl(Owner Reported), Transmission - 5 Speed Manual, Kerb Weight - 199 kg",
      productImage:"https://imgd.aeplcdn.com/1280x720/n/cw/ec/49739/himalayan-right-front-three-quarter.jpeg?q=80"
      },
  
      {
      productTitle:"KTM 200 Duke",
      description: "Displacement - 199.5 cc, Mileage - 33 kmpl(Owner Reported), Transmission - 6 Speed Manual, Kerb Weight - 159 kg",
      productImage:"https://imgd.aeplcdn.com/1280x720/n/cw/ec/49496/duke-200-right-front-three-quarter.jpeg?q=80"
      },
  
      {
      productTitle:"Yamaha YZF R15 V3",
      description: "Displacement - 155 cc, Mileage - 43 kmpl(Owner Reported), Transmission - 6 Speed Manual, Kerb Weight - 142 kg",
      productImage:"https://imgd.aeplcdn.com//642x361//bw/ec/34973/Yamaha-YZF-R15-V3-Front-threequarter-130087.jpg?wm=2"
      },
    
      {
      productTitle:"Bajaj Pulsar RS 200",
      description: "Displacement - 199.5 cc, Mileage - 35 kmpl(Owner Reported), Transmission - 6 Speed Manual, Kerb Weight - 166 kg",
      productImage:"https://imgd.aeplcdn.com/1280x720/bikewaleimg/ec/18342/img/l/Bajaj-Pulsar-RS200-Road-Test-50397.jpg?v=201711021421&q=80"
      }
      ];

      getBikesData():Product[]{
        return this.bikes
      }

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
