import appContext from '../../../context/app';
import routeContext from '../../../context/route/auth/login';
import {
  User,
  HttpException,
  LoginPayload,
} from '../../../models';

export class Result {
  constructor(public status: number, public body: User) {}
}

export const Handler = async (appCtx: appContext, routeCtx: routeContext, payload: LoginPayload): Promise<Result | HttpException> => {
  let user: User;

  return new Result(200, user);
}
