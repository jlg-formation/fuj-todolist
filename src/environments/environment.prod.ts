import { cfg } from '../../config';

export const environment = {
  production: true,
  domain: cfg.domain,
};

console.log = () => {};
