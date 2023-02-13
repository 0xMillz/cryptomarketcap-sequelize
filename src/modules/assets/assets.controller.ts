import { Controller, Get } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { Asset } from "./asset.model";


@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  async findAll(): Promise<Asset[]> {
    return this.assetsService.findAll();
  }
}
