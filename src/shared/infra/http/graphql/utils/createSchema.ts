import { buildSchema } from 'type-graphql';
import { GraphQLSchema } from 'graphql';

import { RegistersResolver } from '@modules/users/infra/graphql/resolvers/RegistersResolver';

const createSchema = (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [
      RegistersResolver
    ],
    emitSchemaFile: { path: 'schema.graphql' },
    dateScalarMode: 'isoDate',
  });

export default createSchema;