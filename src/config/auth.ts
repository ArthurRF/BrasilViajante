import fs from 'fs';
import { resolve } from 'path';

export default {
  jwt: {
    secret: fs.readFileSync(
      resolve(__dirname, '..', '..', 'keys', 'private.key'),
      'utf8'
    ),
    accessTokenExpiration: '180d',
    refreshTokenExpiration: '365d',
  },
};
