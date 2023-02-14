import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { ExchangesService } from './exchanges.service';
import { Exchange } from './exchange.model';

@Controller('exchanges')
export class ExchangesController {
  constructor(private readonly exchangesService: ExchangesService) {}

  @Get()
  async findAll(@Res() response): Promise<Exchange[]> {
    const exchanges = await this.exchangesService.findAll();
    return response.status(HttpStatus.OK).json(exchanges);
  }
}
