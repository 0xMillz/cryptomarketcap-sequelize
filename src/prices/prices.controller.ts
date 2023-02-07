import { Controller, Get } from '@nestjs/common';
import { PricesService } from './prices.service';
import { Price } from './interfaces/price.interface';

@Controller('prices')
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  @Get()
  async findAll(): Promise<Price[]> {
    return this.pricesService.findAll();
  }
}
