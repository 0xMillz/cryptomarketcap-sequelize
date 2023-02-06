import { Controller, Get } from '@nestjs/common';
import { PricesService } from './prices.service';
import { Price } from './interfaces/price.interface';

@Controller('prices')
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  @Get()
  getPrices(): Array<Price> {
    return this.pricesService.getPrices();
  }
}
