import { injectable } from "tsyringe";

import { prisma } from "@shared/database/prisma";

import { User } from "@prisma/client";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";

class UsersRepository implements IUsersRepository {
  public async create({
    name,
    legal_registry_number,
    email,
    password,
    phone
  }: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name,
        legal_registry_number,
        email,
        password,
        phone
      }
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    return user;
  }
}

export { UsersRepository }