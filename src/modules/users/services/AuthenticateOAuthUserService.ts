import { injectable, inject } from 'tsyringe';
import { sign } from 'jsonwebtoken';

import authConfig from '@config/auth';

import { AppError } from '@shared/errors/AppError';

import { ILoginContext } from '../infra/graphql/context/ILoginContext';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { User } from '@prisma/client'

interface IRequest {
  email?: string;
  apple_id?: string;
  facebook_id?: number;
  language_code: string;
}

interface IResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

@injectable()
class AuthenticateOauthUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  public async execute(
    { email, facebook_id }: IRequest,
    context: ILoginContext
  ): Promise<IResponse> {
    let user: User | null = null;

    if (email && !facebook_id) {
      user = await this.usersRepository.findByEmail(email);
    } else if (facebook_id) {
      user = await this.usersRepository.findByFacebookId(facebook_id);
    }

    if (!user) {
      throw new AppError('User not found');
    }

    const loginContext = context.req.session;
    if (loginContext) {
      loginContext.userId = user.id;
    }

    const { secret, accessTokenExpiration, refreshTokenExpiration } =
      authConfig.jwt;

    const accessToken = sign({}, secret, {
      subject: user.id,
      expiresIn: accessTokenExpiration,
      algorithm: 'RS256',
    });

    const refreshToken = sign({}, secret, {
      subject: user.id,
      expiresIn: refreshTokenExpiration,
      algorithm: 'RS256',
    });

    return {
      user,
      accessToken,
      refreshToken,
    };
  }
}

export { AuthenticateOauthUserService };
