import { ApolloServer } from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import { GraphQLResponse } from 'apollo-server-types';

import app from '@shared/infra/http/app';
import createSchema from '@shared/infra/http/graphql/utils/createSchema';
import { AppError } from '@shared/errors/AppError';

async function startApolloServer(): Promise<void> {
  const schema = await createSchema();
  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }): unknown => ({ req, res }),
    formatResponse: (response, query): GraphQLResponse => {
      const { context } = query;

      (context as any).res.set(
        'Access-Control-Expose-Headers',
        'Authorization, x-refresh-token'
      );
      (context as any).res.set(
        'Authorization',
        (context as any).req.headers.authorization as string
      );
      (context as any).res.set(
        'x-refresh-token',
        (context as any).req.headers['x-refresh-token'] as string
      );

      return response as GraphQLResponse;
    },
    introspection: true,
    formatError: (error: AppError): AppError => {
      if (error instanceof GraphQLError) {
        return new AppError(error.message);
      } else {
        return error;
      }
    }
  });

  apolloServer.applyMiddleware({ app });
}

startApolloServer();

export default app.listen(process.env.APP_PORT, () => {
  console.log(`🚀 Server is running on port ${process.env.APP_PORT}!`)
});