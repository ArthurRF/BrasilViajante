import { inject, injectable } from 'tsyringe';

import { User } from '@prisma/client';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { RegisterResponse } from '../infra/graphql/scalars/RegisterResponse';

interface IRequest {
  email: string;
  name: string;
  google_id: string;
}

@injectable()
class CreateGoogleUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  public async execute({
    name,
    email: googleUserEmail,
    google_id,
  }: IRequest): Promise<RegisterResponse> {
    const checkUserExistsWithGivenEmail =
      await this.usersRepository.findByEmail(googleUserEmail);

    const checkUserExistsWithGivenGoogleId =
      await this.usersRepository.findByGoogleId(google_id);

    if (!checkUserExistsWithGivenEmail && !checkUserExistsWithGivenGoogleId) {
      const user = await this.usersRepository.create({
        name,
        email: googleUserEmail,
        google_id,
      });

      return {
        user,
        isRegister: true,
      };
    }

    if (checkUserExistsWithGivenEmail) {
      await this.usersRepository.update(checkUserExistsWithGivenEmail.id, {
        google_id,
      });
    }

    if (checkUserExistsWithGivenGoogleId) {
      await this.usersRepository.update(checkUserExistsWithGivenGoogleId.id, {
        email: googleUserEmail,
      });

      return {
        user: checkUserExistsWithGivenGoogleId,
        isRegister: false,
      };
    }

    return {
      user: checkUserExistsWithGivenEmail as User,
      isRegister: false,
    };
  }
}

export { CreateGoogleUserService }