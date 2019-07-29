import express from 'express';
import appContext from '../../../context/app';
import routeContext from '../../../context/route/auth/logout';
import { HttpException } from '../../../models/exceptions/http';
import { LogoutPayload } from '../../../models';

export default async (
  appCtx: appContext,
  routeCtx: routeContext,
  payload: LogoutPayload,
  req: express.Request,
  res: express.Response,
): Promise<HttpException | void> => {
  // check session
  if (!req.session.key)
    return new HttpException(401, 'unauthorized');

  // set the destroySession function
  routeCtx.destroySession = ():void => {
    req.session.destroy((err: any): void => {
      // TODO: properly handler error
      if (!err)
        console.log('err in callback', err);
    });
  }
}
