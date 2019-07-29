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

  try {
    let valid: boolean = await appCtx.db.isUsernamePasswordValid(payload.userName, payload.password);
    if (!valid)
       return new HttpException(401, 'unauthorized');

    user = await appCtx.db.fetchUserByUsername(payload.userName);

    routeCtx.setSessionKey(user.userID);

    return new Result(200, user);
  } catch (e) {
    console.error('err logging user in', e);

    return new HttpException(500, 'internal server error');
  }
}
