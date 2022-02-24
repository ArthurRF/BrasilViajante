import { injectable } from "tsyringe";
import { prisma } from "@shared/database/prisma";

import { User } from "@prisma/client";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "@modules/users/dtos/IUpdateUserDTO";

@injectable()
class UsersRepository implements IUsersRepository {
  public async create({
    name,
    legal_registry_number,
    email,
    password,
    phone,
    facebook_id,
    google_id,
  }: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name,
        legal_registry_number,
        email,
        password,
        phone,
        facebook_id,
        google_id,
      }
    });

    return user;
  }

  public async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        id,
        active: true,
      }
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    return user;
  }

  public async findByFacebookId(
    facebook_id: number
  ): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        facebook_id,
        active: true,
      }
    });

    return user;
  }

  public async findByGoogleId(google_id: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        google_id,
        active: true,
      }
    });

    return user;
  }

  public async update(
    id: string,
    updated_data: IUpdateUserDTO
  ): Promise<User> {
    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        facebook_id: updated_data.facebook_id ? updated_data.facebook_id : null,
        google_id: updated_data.google_id ? updated_data.google_id : null,
        name: updated_data.name ? updated_data.name : undefined,
        legal_registry_number: updated_data.legal_registry_number ? updated_data.legal_registry_number : null,
        email: updated_data.email ? updated_data.email : null,
      }
    })

    return updatedUser;
  }
}

export { UsersRepository }