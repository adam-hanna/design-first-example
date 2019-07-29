import { Request, Response } from 'express';
import app from '../../../app';
import appContext from '../../../../context/app';
import routeContext from '../../../../context/route/tasks/show';
import { HttpException } from '../../../../models/exceptions/http';
import authenticate from '../../../../authentication/tasks/show';
import authorize from '../../../../authorization/tasks/show';
import { Result, Handler } from '../../../../handlers/tasks/show';
import PayloadValidator from '../../../middleware/validation';
import { ShowTaskPayload } from '../../../../models';

export default async (req: Request, res: Response): Promise<void> => {
  const appCtx: appContext = app.get('context');
  const routeCtx: routeContext = new routeContext();

  let reqPayload: any = Object.assign({}, req.params, req.body);
  const validationErr: string | void = await PayloadValidator(ShowTaskPayload, reqPayload);
  if (validationErr) {
    res.status(400).send(validationErr);
    return
  }
  let payload: ShowTaskPayload = Object.assign({}, new ShowTaskPayload, reqPayload);
  
  const authenticationErr: HttpException | void = await authenticate(appCtx, routeCtx, payload, req, res)
  if (authenticationErr) {
    res.status(authenticationErr.status).send(authenticationErr.body);
    return
  }

  const authorizationErr: HttpException | void = await authorize(appCtx, routeCtx, payload, req, res)
  if (authorizationErr) {
    res.status(authorizationErr.status).send(authorizationErr.body);
    return
  }

  const result: Result | HttpException = await Handler(appCtx, routeCtx, payload)
  res.status(result.status).send(result.body);
}
