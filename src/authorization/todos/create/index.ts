import { Request, Response } from 'express';
import appContext from '../../../context/app';
import requestContext from '../../../context/request/todos/create';
import { HttpReturn } from '../../../internal/utils';
import { CreateTodoPayload } from '../../../models';

export default async (
  appCtx: appContext,
  requestCtx: requestContext,
  payload: CreateTodoPayload,
  req: Request,
  res: Response,
): Promise<HttpReturn | void> => {
  if (requestCtx.isAdmin)
    return

  if (requestCtx.userID != payload.userID)
    return new HttpReturn(401, 'unauthorized');
}
