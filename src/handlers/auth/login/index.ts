import appContext from '../../../context/app';
import { HttpReturn } from 'design-first';
import requestContext from '../../../context/request/auth/login';
import {
  User,
  LoginPayload,
} from '../../../models';

export const Handler = async (appCtx: appContext, requestCtx: requestContext, payload: LoginPayload): Promise<HttpReturn> => {
  let result: User;

  try {
    // your code, here...
    let valid: boolean = await appCtx.db.isUsernamePasswordValid(payload.username, payload.password);
    if (!valid)
       return new HttpReturn(401, 'unauthorized');

    result = await appCtx.db.fetchUserByUsername(payload.username);

    requestCtx.setSession(result.userID, result.isAdmin);

    return new HttpReturn(200, result);

    return new HttpReturn(200, result);
  } catch (e) {
    console.error('err in login action of auth service', e);

    return new HttpReturn(500, 'internal server error');
  }
}
