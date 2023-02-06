import { Controller, Get } from '@nestjs/common';
import { PricesService } from './prices.service';

@Controller('prices')
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  @Get()
  getPrices(): Array<any> {
    return this.pricesService.getPrices();
  }
}
