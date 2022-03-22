import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { container } from "tsyringe";

import { User } from "@prisma/generated/type-graphql";

import { ILoginContext } from "../context/ILoginContext";

import { RegisterUserInput } from "@modules/users/infra/graphql/inputs/RegisterUserInput";
import { CreateFacebookUserInput } from "@modules/users/infra/graphql/inputs/CreateFacebookUserInput";

import { LoginResponse } from "../scalars/LoginResponse";
import { CreateUserService } from "@modules/users/services/CreateUserService";
import { CreateFacebookUserService } from "@modules/users/services/CreateFacebookUserService";
import { AuthenticateOauthUserService } from "@modules/users/services/AuthenticateOAuthUserService";
import { CreateGoogleUserInput } from "../inputs/CreateGoogleUserInput";
import { CreateGoogleUserService } from "@modules/users/services/CreateGoogleUserService";
import { GetUserDetailService } from "@modules/users/services/GetUserDetailService";
import { AppError } from "@shared/errors/AppError";

@Resolver()
class RegistersResolver {
  @Mutation(() => User)
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

  @Mutation(() => LoginResponse)
  async registerFacebookUser(
    @Arg('data')
    {
      name,
      email,
      facebook_id,
    }: CreateFacebookUserInput,
    @Ctx() ctx: ILoginContext
  ): Promise<LoginResponse | undefined> {
    try {
      const createFacebookUser = container.resolve(CreateFacebookUserService);
      const authenticateOauthUser = container.resolve(
        AuthenticateOauthUserService
      );

      if (!email) {
        throw new AppError('Email is required');
      }

      const { user } = await createFacebookUser.execute({
        name,
        email,
        facebook_id,
      });

      const userAuthorization = await authenticateOauthUser.execute(
        {
          email: user.email ? user.email.toLowerCase() : undefined,
          facebook_id,
          language_code: ctx.req.headers.languagecode as string,
        },
        ctx
      );

      return {
        user: userAuthorization.user,
        accessToken: userAuthorization.accessToken,
        refreshToken: userAuthorization.refreshToken,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  @Mutation(() => LoginResponse)
  async registerGoogleUser(
    @Arg('data')
    {
      name,
      email,
      google_id,
    }: CreateGoogleUserInput,
    @Ctx() ctx: ILoginContext
  ): Promise<LoginResponse | undefined> {
    try {
      const createGoogleUser = container.resolve(CreateGoogleUserService);
      const authenticateOauthUser = container.resolve(
        AuthenticateOauthUserService
      );

      if (!email) {
        throw new AppError('Email is required');
      }

      const { user } = await createGoogleUser.execute({
        name,
        email: email.toLowerCase(),
        google_id,
      });

      const userAuthorization = await authenticateOauthUser.execute(
        {
          email: user.email ?? undefined,
          language_code: ctx.req.headers.languagecode as string,
        },
        ctx
      );

      return {
        user: userAuthorization.user,
        accessToken: userAuthorization.accessToken,
        refreshToken: userAuthorization.refreshToken,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  @Query(() => User)
  public async getUserDetailed(
    @Arg('id') id: string
  ): Promise<User> {
    const getUserDetail = container.resolve(
      GetUserDetailService
    );

    const userDetail = await getUserDetail.execute(id);

    return userDetail;
  }
}

export { RegistersResolver };