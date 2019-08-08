import { Request, Response } from 'express';
import appContext from '../../../context/app';
import requestContext from '../../../context/request/auth/login';
import { HttpReturn } from '../../../internal/utils';
import { LoginPayload } from '../../../models';

export default async (
  appCtx: appContext,
  requestCtx: requestContext,
  payload: LoginPayload,
  req: Request,
  res: Response,
): Promise<HttpReturn | void> => {
  requestCtx.setSession = (userID: string, isAdmin: boolean): void => {
    req.session.userID = userID;
    req.session.isAdmin = isAdmin;

    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    const csrf: string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    req.session.csrf = csrf;
    res.setHeader('X-CSRF', csrf);
  }
}
