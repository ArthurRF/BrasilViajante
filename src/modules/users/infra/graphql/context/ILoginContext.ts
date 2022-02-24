import { Request } from 'express';
import { ServerResponse } from 'http';

import AppError from '@shared/errors/AppError';

export interface ILoginContext {
  req: Request;
  res: ServerResponse;
  error: AppError;
}
