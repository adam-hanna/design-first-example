import appContext from '../../../context/app';
import routeContext from '../../../context/route/auth/register';
import {
  User,
  HttpException,
  RegisterPayload,
} from '../../../models';

export class Result {
  constructor(public status: number, public body: User) {}
}

export const Handler = async (appCtx: appContext, routeCtx: routeContext, payload: RegisterPayload): Promise<Result | HttpException> => {
  let user: User;

  try {
    user = await appCtx.db.createUser(payload.username, payload.password);

    routeCtx.setSession(user.userID, user.isAdmin);

    return new Result(200, user);
  } catch (e) {
    console.error('err registering new user', e);

    return new HttpException(500, 'internal server error');
  }
}
