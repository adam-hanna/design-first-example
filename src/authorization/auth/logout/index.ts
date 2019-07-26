import { Request, Response } from 'express';
import appContext from '../../../context/app';
import routeContext from '../../../context/route/auth/logout';
import { HttpException } from '../../../models/exceptions/http';
import { LogoutPayload } from '../../../models';

export default async (
  appCtx: appContext,
  routeCtx: routeContext,
  payload: LogoutPayload,
  req: Request,
  res: Response,
): Promise<HttpException | void> => {}
