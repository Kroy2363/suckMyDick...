import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  data = {
    vehicles: [{
      id: 1,
      manufacture: "Porche",
      name: "GHJZ87",
      type: "Illesztő",
      weight: "200 kg",
      power: "60 W",
    }],
    peoples: [{
      id: 2,
      name: "Kiss János",
      phone: "30/7642312",
      idcard: "654514TR",
      height: "160 cm",
    }],
    rent: [{
      id: 3,
      date: '2022-02-11',
      phone: '30/7642312',
    }]
  };

  constructor() {
   }

   getAll(dataType: string): any[] {
    switch (dataType){
      case 'vehicles':
        return this.data['vehicles'];
      case 'peolpes':
        return this.data['peoples'];
      case 'rent':
        return this.data['rent'];
    }
    return [];
  }



}
