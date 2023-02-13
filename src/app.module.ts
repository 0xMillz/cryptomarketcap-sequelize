import 'dotenv/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AssetsModule } from './modules/assets/assets.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const username = config.get('POSTGRES_USER') ?? 'postgres';
        const password = config.get('POSTGRES_PASSWORD') ?? 'password';
        const host = config.get('POSTGRES_HOST') ?? 'localhost';
        const port = config.get('POSTGRES_PORT') ?? 5432;
        const database = config.get('POSTGRES_NAME') ?? 'cryptomarketcap';
        const dialect = config.get('POSTGRES_DIALECT') ?? 'postgres';

        console.info(`Attempting connection to ${database} db on port ${port}`);

        return {
          username,
          password,
          database,
          host,
          port: +port,
          dialect,
        };
      },
    }),
    AssetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
