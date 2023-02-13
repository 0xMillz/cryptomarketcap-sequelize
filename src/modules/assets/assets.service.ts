import { Injectable } from '@nestjs/common';
import { Asset } from './asset.model';
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class AssetsService {
  constructor(
    @InjectModel(Asset)
    private readonly assetModel: typeof Asset,
  ) {}

  findOneById(id: string): Promise<Asset> {
    return this.assetModel.findOne({
      where: {
        id,
      },
    });
  }

  findAll(): Promise<Asset[]> {
    return this.assetModel.findAll();
  }
}
