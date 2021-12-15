import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
class UserType {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true })
  legal_registry_number: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  password: string;

  @Field(() => String, { nullable: true })
  phone: string;
}

export { UserType };