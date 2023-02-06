import { Injectable } from '@nestjs/common';

@Injectable()
export class PricesService {
  getPrices(): Array<any> {
    return [
      {
        asset: 'Bitcoin',
        price: '60000.00',
      },
      {
        asset: 'Ethereum',
        price: '6501.07',
      }
    ];
  }
}
