import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Asset } from './asset.model';
import { AssetsController } from './assets.controller';
import { assetsProviders } from "./assets.providers";

@Module({
  imports: [SequelizeModule.forFeature([Asset])],
  controllers: [AssetsController],
  providers: [
    AssetsService,
    ...assetsProviders
  ],
})
export class AssetsModule {}
