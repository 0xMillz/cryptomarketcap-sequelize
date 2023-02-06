import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PricesController } from './prices.controller';
import { PricesService } from './prices.service';

@Module({
  imports: [],
  controllers: [AppController, PricesController],
  providers: [AppService, PricesService],
})
export class AppModule {}
