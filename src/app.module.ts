import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AssetsModule } from './modules/assets/assets.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Asset } from './modules/assets/asset.model';
import { Exchange } from './modules/exchanges/exchange.model';
import { ExchangesModule } from './modules/exchanges/exchanges.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const username = config.get('POSTGRES_USER');
        const password = config.get('POSTGRES_PASSWORD');
        const host = config.get('POSTGRES_HOST');
        const port = config.get('POSTGRES_PORT');
        const database = config.get('POSTGRES_DB');
        const dialect = config.get('POSTGRES_DIALECT');

        console.info(`Connecting to ${database} db on port ${port}`);

        return {
          username,
          password,
          database,
          host,
          port: +port,
          dialect,
          entities: [Asset, Exchange],
          autoLoadModels: true,
        };
      },
    }),
    AssetsModule,
    ExchangesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
