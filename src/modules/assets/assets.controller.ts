import { Controller, Get, HttpStatus, Param, Res } from "@nestjs/common";
import { AssetsService } from './assets.service';
import { Asset } from "./asset.model";


@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get('/:id')
  async fineOneById(@Res() response, @Param('id') id): Promise<Asset[]> {
    const asset = await this.assetsService.findOneById(id)
    return response.status(HttpStatus.OK).json(asset)
  }

  @Get()
  async findAll(@Res() response): Promise<Asset[]> {
    const assets = await this.assetsService.findAll()
    return response.status(HttpStatus.OK).json(assets)
  }
}
