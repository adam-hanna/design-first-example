import express from 'express';
import appContext from '../../../context/app';
import routeContext from '../../../context/route/tasks/list';
import { HttpException } from '../../../models/exceptions/http';

export default async (
  appCtx: appContext,
  routeCtx: routeContext,
  req: express.Request,
  res: express.Response,
): Promise<HttpException | null> => {
  return null
}
