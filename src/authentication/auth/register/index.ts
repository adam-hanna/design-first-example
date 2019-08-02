import { Request, Response } from 'express';
import appContext from '../../../context/app';
import requestContext from '../../../context/request/auth/register';
import { HttpReturn } from '../../../internal/utils';
import { RegisterPayload } from '../../../models';

export default async (
  appCtx: appContext,
  requestCtx: requestContext,
  payload: RegisterPayload,
  req: Request,
  res: Response,
): Promise<HttpReturn | void> => {
  requestCtx.setSession = (userID: string, isAdmin: boolean): void => {
    req.session.userID = userID;
    req.session.isAdmin = isAdmin;
  }
}
