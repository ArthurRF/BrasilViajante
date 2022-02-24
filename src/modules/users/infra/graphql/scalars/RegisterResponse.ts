import { ObjectType, Field } from 'type-graphql';

import { User } from '@prisma/client';

@ObjectType()
class RegisterResponse {
  @Field()
  user: User;

  @Field()
  isRegister?: boolean;
}

export { RegisterResponse };