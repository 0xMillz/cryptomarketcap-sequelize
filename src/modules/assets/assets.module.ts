import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Asset } from "./asset.entity";
import { AssetsController } from "./assets.controller";

@Module({
  imports: [SequelizeModule.forFeature([Asset])],
  controllers: [AssetsController],
  providers: [AssetsService],
})
export class AssetsModule {}
