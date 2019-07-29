import express from 'express';
import appContext from '../../../context/app';
import routeContext from '../../../context/route/tasks/list';
import { HttpException } from '../../../models/exceptions/http';
import { ListTasksPayload } from '../../../models';

export default async (
  appCtx: appContext,
  routeCtx: routeContext,
  payload: ListTasksPayload,
  req: express.Request,
  res: express.Response,
): Promise<HttpException | void> => {
  // check session
  if (!req.session.key)
    return new HttpException(401, 'unauthorized');
}
