import { GraphQLError } from 'graphql';

class AppError extends GraphQLError {
  public readonly message: string;

  constructor(message: string) {
    super(message);
  }
}

export default AppError;
