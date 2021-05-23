import { Injectable } from '@angular/core';
import { Product } from './models/prodcut.model';

@Injectable({
  providedIn: 'root'
})
export class BikesService {

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
}
