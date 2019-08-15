import appContext from '../../../context/app';
import { HttpReturn } from 'design-first';
import requestContext from '../../../context/request/auth/register';
import {
  User,
  RegisterPayload,
} from '../../../models';

export const Handler = async (appCtx: appContext, requestCtx: requestContext, payload: RegisterPayload): Promise<HttpReturn> => {
  let result: User;

  try {
    // your code, here...
    result = await appCtx.db.createUser(payload.username, payload.password);

    requestCtx.setSession(result.userID, result.isAdmin);

    return new HttpReturn(200, result);
  } catch (e) {
    console.error('err in register action of auth service', e);

    return new HttpReturn(500, 'internal server error');
  }
}
