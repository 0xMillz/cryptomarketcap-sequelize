import { Injectable } from '@nestjs/common';
import { Price } from './interfaces/price.interface';

@Injectable()
export class PricesService {
  private readonly prices: Price[] = [
    {
      asset: 'Bitcoin',
      price: '50000.00',
    },
    {
      asset: 'Ethereum',
      price: '6501.07',
    },
  ];

  findAll(): Price[] {
    return this.prices;
  }
}
