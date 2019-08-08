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

}
