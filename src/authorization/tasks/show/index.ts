import { Request, Response } from 'express';
import appContext from '../../../context/app';
import routeContext from '../../../context/route/tasks/show';
import { HttpException } from '../../../models/exceptions/http';
import { ShowTaskPayload } from '../../../models';

export default async (
  appCtx: appContext,
  routeCtx: routeContext,
  payload: ShowTaskPayload,
  req: Request,
  res: Response,
): Promise<HttpException | void> => {}