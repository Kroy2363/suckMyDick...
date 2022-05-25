import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  cols = {
    vehicles: [
      { key: 'id', text: '1' },
      { key: 'manufacture', text: 'Manufacture' },
      { key: 'name', text: 'Name' },
      { key: 'type', text: 'Type' },
      { key: 'weight', text: 'Weight' },
      { key: 'power', text: 'Power' },
  ],
    peoples: [
      { key: 'id', text: '1' },
      { key: 'name', text: 'Kiss János' },
      { key: 'phone', text: '30/7642312' },
      { key: 'idcard', text: '654514TR' },
      { key: 'height', text: '160 cm' },
    ],
    rent: [
      { key: 'id', text: '1' },
      { key: 'date', text: '2022-02-11' },
      { key: 'phone', text: '30/7642312' },
    ],
  };

  constructor() {}
}
