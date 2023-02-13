import { Test, TestingModule } from '@nestjs/testing';
import { AssetsService } from './assets.service';
import { Asset } from "./asset.model";
import { getModelToken } from "@nestjs/sequelize";

describe('AssetsService', () => {
  let service: AssetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetsService, { provide: getModelToken(Asset), useValue: jest.fn() }],
    }).compile();

    service = module.get<AssetsService>(AssetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
