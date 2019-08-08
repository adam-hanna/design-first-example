import appContext from '../../../context/app';
import { HttpReturn } from '../../../internal/utils';
import requestContext from '../../../context/request/auth/logout';
import {} from '../../../models';

export const Handler = async (appCtx: appContext, requestCtx: requestContext): Promise<HttpReturn> => {
  let result: string;

  try {
    // your code, here...
    result = 'ok';

    return new HttpReturn(200, result);
  } catch (e) {
    console.error('err in logout action of auth service', e);

    return new HttpReturn(500, 'internal server error');
  }
}
