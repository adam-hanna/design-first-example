import { Request, Response } from 'express';
import appContext from '../../../context/app';
import routeContext from '../../../context/route/auth/logout';
import { HttpException } from '../../../models/exceptions/http';

export default async (
  appCtx: appContext,
  routeCtx: routeContext,
  req: Request,
  res: Response,
): Promise<HttpException | void> => {}
