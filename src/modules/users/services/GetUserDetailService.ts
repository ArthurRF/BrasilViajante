import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { User } from '@prisma/client';

import { IUsersRepository } from '../repositories/IUsersRepository';

@injectable()
class GetUserDetailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  public async execute(id: string): Promise<User> {
    const userDetail = await this.usersRepository.findById(id);

    if (!userDetail) {
      throw new AppError('User not found');
    }

    return userDetail;
  }
}

export { GetUserDetailService };