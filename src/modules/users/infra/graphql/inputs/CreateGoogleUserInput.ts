import { InputType, Field } from 'type-graphql';

@InputType()
class CreateGoogleUserInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  email?: string;

  @Field()
  google_id: string;
}

export { CreateGoogleUserInput };