import { inject, injectable } from 'tsyringe';

import { User } from '@prisma/client';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { RegisterResponse } from '../infra/graphql/scalars/RegisterResponse';


interface IRequest {
  email?: string;
  name: string;
  facebook_id: number;
}

@injectable()
class CreateFacebookUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  public async execute({
    name,
    email: facebookUserEmail,
    facebook_id,
  }: IRequest): Promise<RegisterResponse> {
    let checkUserExistsWithGivenEmail: User | undefined;

    if (facebookUserEmail) {
      checkUserExistsWithGivenEmail = await this.usersRepository.findByEmail(
        facebookUserEmail
      );
    }

    const checkUserExistsWithGivenFacebookId =
      await this.usersRepository.findByFacebookId(facebook_id);

    if (!checkUserExistsWithGivenEmail && !checkUserExistsWithGivenFacebookId) {
      const user = await this.usersRepository.create({
        name,
        email: facebookUserEmail,
        facebook_id,
      });

      return {
        user,
        isRegister: true,
      };
    }

    if (checkUserExistsWithGivenEmail) {
      await this.usersRepository.update(checkUserExistsWithGivenEmail.id, {
        facebook_id,
      });
    }

    if (checkUserExistsWithGivenFacebookId) {
      await this.usersRepository.update(checkUserExistsWithGivenFacebookId.id, {
        email: facebookUserEmail,
      });

      return {
        user: checkUserExistsWithGivenFacebookId,
        isRegister: false,
      };
    }

    return {
      user: checkUserExistsWithGivenEmail as User,
      isRegister: false,
    };
  }
}

export { CreateFacebookUserService };