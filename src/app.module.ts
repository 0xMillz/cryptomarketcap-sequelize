import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AssetsModule } from './modules/assets/assets.module';
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
          username: config.get('POSTGRES_USER'),
          password: config.get('POSTGRES_PASSWORD'),
          database: config.get('POSTGRES_NAME'),
          host: config.get('POSTGRES_HOST'),
          port: +config.get('POSTGRES_PORT'),
          dialect: config.get('POSTGRES_DIALECT')
        })
    }),
    AssetsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
