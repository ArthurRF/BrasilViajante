// import { Mutation, Arg, Ctx } from 'type-graphql';
// import { container } from 'tsyringe';

// import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

// import LoginUserInput from '../inputs/LoginUserInput';
// import { ILoginContext } from '../context/ILoginContext';

// import LoginResponse from '@modules/users/infra/graphql/scalars/LoginResponse';

// class LoginResolver {
//   @Mutation(() => LoginResponse)
//   async login(
//     @Arg('data') { email, password }: LoginUserInput,
//     @Ctx() ctx: ILoginContext
//   ): Promise<LoginResponse> {
//     const authenticateUser = container.resolve(AuthenticateUserService);

//     const { user, accessToken, refreshToken } = await authenticateUser.execute(
//       {
//         email,
//         password,
//         language_code: ctx.req.headers.languagecode as string,
//       },
//       ctx
//     );

//     return {
//       user,
//       accessToken,
//       refreshToken,
//     };
//   }
// }

// export { LoginResolver };