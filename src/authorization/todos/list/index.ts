import { Request, Response } from 'express';
import appContext from '../../../context/app';
import requestContext from '../../../context/request/todos/list';
import { HttpReturn } from '../../../internal/utils';
import { ListTodosPayload } from '../../../models';

export default async (
  appCtx: appContext,
  requestCtx: requestContext,
  payload: ListTodosPayload,
  req: Request,
  res: Response,
): Promise<HttpReturn | void> => {
  if (req.session.isAdmin)
    return

  if (req.session.userID != payload.userID)
    return new HttpReturn(401, 'unauthorized');
}
