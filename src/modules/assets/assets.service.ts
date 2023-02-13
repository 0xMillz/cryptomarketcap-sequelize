import { Injectable } from '@nestjs/common';
import { Asset } from './asset.model';
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class AssetsService {
  constructor(
    @InjectModel(Asset)
    private readonly AssetModel: typeof Asset,
  ) {}

  findOne(id: string): Promise<Asset> {
    return this.AssetModel.findOne({
      where: {
        id,
      },
    });
  }

  findAll(): Promise<Asset[]> {
    return this.AssetModel.findAll();
  }
}
