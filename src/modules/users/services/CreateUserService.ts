import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { User } from '@prisma/client';

import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  legal_registry_number?: string;
  email?: string;
  password: string;
  phone?: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  public async execute({
    name,
    legal_registry_number,
    email,
    password,
    phone
  }: IRequest): Promise<User> {
    if (email) {
      const checkUserExists = await this.usersRepository.findByEmail(email);

      if (checkUserExists) {
        throw new AppError('Email already used.');
      }
    }

    const hashedPassword = await hash(password, 10);

    const user = await this.usersRepository.create({
      name,
      legal_registry_number,
      email,
      password: hashedPassword,
      phone
    });

    return user;
  }
}

export { CreateUserService };