import { User } from "@prisma/client";

import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}

export { IUsersRepository };