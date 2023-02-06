import { Injectable } from '@nestjs/common';
import { Price } from './interfaces/price.interface';

@Injectable()
export class PricesService {
  getPrices(): Array<Price> {
    return [
      {
        asset: 'Bitcoin',
        price: '60000.00',
      },
      {
        asset: 'Ethereum',
        price: '6501.07',
      },
    ];
  }
}
