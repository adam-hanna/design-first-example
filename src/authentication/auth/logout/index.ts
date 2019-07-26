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
): Promise<HttpException | void> => {}
