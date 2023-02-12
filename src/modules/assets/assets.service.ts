import { Injectable } from '@nestjs/common';
import { Asset } from './interfaces/asset.interface';

@Injectable()
export class AssetsService {
  private readonly assets: Asset[] = [
    {
      id: '21bea8c5-a9f3-4246-972a-e683104574bd',
      name: 'Bitcoin',
      price: '50001.00',
    },
    {
      id: '504a5d82-7995-4682-92dd-c9bfd40f6141',
      name: 'Ethereum',
      price: '6501.07',
    },
  ];

  findAll(): Asset[] {
    return this.assets;
  }
}
