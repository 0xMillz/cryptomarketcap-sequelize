import { Module } from '@nestjs/common';
import { ExchangesService } from './exchanges.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Exchange } from './exchange.model';
import { ExchangesController } from './exchanges.controller';
import { exchangesProviders } from './exchanges.providers';

@Module({
  imports: [SequelizeModule.forFeature([Exchange])],
  controllers: [ExchangesController],
  providers: [ExchangesService, ...exchangesProviders],
  exports: [ExchangesService],
})
export class ExchangesModule {}
