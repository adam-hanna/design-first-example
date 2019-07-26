import { Request, Response } from 'express';
import appContext from '../../../context/app';
import routeContext from '../../../context/route/auth/register';
import { HttpException } from '../../../models/exceptions/http';
import { RegisterPayload } from '../../../models';

export default async (
  appCtx: appContext,
  routeCtx: routeContext,
  payload: RegisterPayload,
  req: Request,
  res: Response,
): Promise<HttpException | void> => {}
