import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';

import "@shared/container";

const app = express();

app.use(
  express.urlencoded({ limit: '10mb', extended: false, parameterLimit: 50000 })
);
app.use(express.json({ limit: '10mb' }));
app.disable('x-powered-by');
app.use(
  cors({
    origin: [
      'http://localhost:5555',
      'http://www.brasilviajante.xyz',
    ],
  })
);
app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json(err.message);
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
})

app.get('/', (req: Request, res: Response) => {
  return res.json({ message: `Rodando na porta ${process.env.APP_PORT}` });
})

export default app;