import express from 'express';
import appContext from '../../../context/app';
import routeContext from '../../../context/route/auth/login';
import { HttpException } from '../../../models/exceptions/http';
import { LoginPayload } from '../../../models';

export default async (
  appCtx: appContext,
  routeCtx: routeContext,
  payload: LoginPayload,
  req: express.Request,
  res: express.Response,
): Promise<HttpException | void> => {}
