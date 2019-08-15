import { Request, Response } from 'express';
import { HttpReturn } from 'design-first';
import appContext from '../../../context/app';
import requestContext from '../../../context/request/auth/logout';

export default async (
  appCtx: appContext,
  requestCtx: requestContext,
  req: Request,
  res: Response,
): Promise<HttpReturn | void> => {
  // check session
  if (!req.session.userID)
    return new HttpReturn(401, 'unauthorized');

  // check csrf
  if (req.session.csrf !== req.headers['X-CSRF'])
    return new HttpReturn(401, 'unauthorized');

  // log the user out
  req.session.destroy((err: any): void => {
    // TODO: properly handler error
    if (err)
      console.log('err in callback', err);
  });
}
