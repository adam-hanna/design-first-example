import { Request, Response } from 'express';
import { HttpReturn } from 'design-first';
import appContext from '../../../context/app';
import requestContext from '../../../context/request/todos/list';
import { ListTodosPayload } from '../../../models';

export default async (
  appCtx: appContext,
  requestCtx: requestContext,
  payload: ListTodosPayload,
  req: Request,
  res: Response,
): Promise<HttpReturn | void> => {
  if (requestCtx.isAdmin)
    return

  if (requestCtx.userID != payload.userID)
    return new HttpReturn(401, 'unauthorized');
}
