import { Exchange } from './exchange.model';

export const exchangesProviders = [
  {
    provide: 'EXCHANGE_REPOSITORY',
    useValue: Exchange,
  },
];
