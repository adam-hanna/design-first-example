import appContext from '../../../context/app';
import routeContext from '../../../context/route/auth/logout';
import {
  HttpException,
} from '../../../models';

export class Result {
  constructor(public status: number, public body: string) {}
}

export const Handler = async (appCtx: appContext, routeCtx: routeContext): Promise<Result | HttpException> => {
  return new Result(200, 'ok');
}
