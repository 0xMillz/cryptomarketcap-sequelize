import { Asset } from './asset.model';

export const assetsProviders = [
  {
    provide: 'ASSET_REPOSITORY',
    useValue: Asset,
  },
];
