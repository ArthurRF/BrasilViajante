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

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: true })
  phone: string;

  @Field(() => Boolean, { defaultValue: false })
  has_social_login: boolean;

  @Field({ nullable: true })
  facebook_id?: number;

  @Field(() => String, { nullable: true })
  google_id?: string;

  @Field(() => Boolean)
  active: boolean;

  @Field(() => Date)
  created_at: Date;

  @Field(() => Date)
  updated_at: Date;
}

export { UserType };