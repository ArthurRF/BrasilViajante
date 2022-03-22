import { User } from '@prisma/generated/type-graphql';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
class LoginResponse {
  @Field()
  user: User;

  @Field()
  accessToken: string;

  @Field()
  refreshToken?: string;
}

export { LoginResponse };