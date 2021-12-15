import { Arg, Mutation, Resolver } from "type-graphql";
import { container } from "tsyringe";

import { User } from "@prisma/client";
import { UserType } from "@modules/users/infra/graphql/entities/UserType";

import RegisterUserInput from "@modules/users/infra/graphql/inputs/RegisterUserInput";

import { CreateUserService } from "@modules/users/services/CreateUserService";

@Resolver()
class RegistersResolver {
  @Mutation(() => UserType)
  async registerUser(
    @Arg('data')
    {
      name,
      legal_registry_number,
      email,
      password,
      phone
    }: RegisterUserInput
  ): Promise<User> {
    try {
      const createUser = container.resolve(CreateUserService);

      const user = await createUser.execute({
        name,
        legal_registry_number,
        email: email.toLowerCase(),
        password,
        phone,
      });

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export { RegistersResolver };