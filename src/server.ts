import express, { Request, Response } from 'express';

const app = express();

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.send('Hello World!');
})

app.listen(5555, () => console.log('Server is running on port 5555!'));