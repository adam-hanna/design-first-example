import { Request, Response } from 'express';
import appContext from '../../../context/app';
import requestContext from '../../../context/request/auth/logout';
import { HttpReturn } from '../../../internal/utils';

export default async (
  appCtx: appContext,
  requestCtx: requestContext,
  req: Request,
  res: Response,
): Promise<HttpReturn | void> => {

}