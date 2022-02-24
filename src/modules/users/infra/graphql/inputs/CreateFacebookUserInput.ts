import { InputType, Field } from 'type-graphql';

@InputType()
class CreateFacebookUserInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  email?: string;

  @Field()
  facebook_id: number;
}

export { CreateFacebookUserInput };