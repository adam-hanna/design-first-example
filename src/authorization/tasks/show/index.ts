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
): Promise<HttpException | void> => {
  if (req.session.isAdmin)
    return

  if (req.session.userID != payload.userID)
    return new HttpException(401, 'unauthorized');
}
