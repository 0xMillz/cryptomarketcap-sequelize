import { Injectable } from '@nestjs/common';
import { Exchange } from './exchange.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ExchangesService {
  constructor(
    @InjectModel(Exchange)
    private readonly exchangeModel: typeof Exchange,
  ) {}

  findOneById(id: string): Promise<Exchange> {
    return this.exchangeModel.findOne({
      where: {
        id,
      },
    });
  }

  findAll(): Promise<Exchange[]> {
    return this.exchangeModel.findAll();
  }
}
