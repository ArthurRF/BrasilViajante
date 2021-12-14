import express, { Request, Response, NextFunction } from 'express';
require('dotenv').config();

const app = express();

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json(err.message);
  }

  return res.status(500).json(err);
})

app.get('/', (req: Request, res: Response) => {
  return res.json({ message: `Rodando na porta ${process.env.APP_PORT}` });
})

app.listen(process.env.APP_PORT, () => console.log(`Server is running on port ${process.env.APP_PORT}!`));