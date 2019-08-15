import { Request, Response } from 'express';
import { HttpReturn } from 'design-first';
import appContext from '../../../context/app';
import requestContext from '../../../context/request/todos/create';
import { CreateTodoPayload } from '../../../models';

export default async (
  appCtx: appContext,
  requestCtx: requestContext,
  payload: CreateTodoPayload,
  req: Request,
  res: Response,
): Promise<HttpReturn | void> => {

}
