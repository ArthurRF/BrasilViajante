import { User } from "@prisma/client";

import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findByFacebookId(facebook_id: number): Promise<User | null>;
  findByGoogleId(google_id: string): Promise<User | null>;
  update(
    id: string,
    updated_data: IUpdateUserDTO
  ): Promise<User>;
}

export { IUsersRepository };