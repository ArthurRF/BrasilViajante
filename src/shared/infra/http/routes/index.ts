import { Router } from 'express';

const routes = Router();

routes.get('/', (_request, response) => {
  response.redirect('/graphql');
});

export default routes;