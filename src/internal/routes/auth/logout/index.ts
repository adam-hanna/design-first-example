import { Request, Response } from 'express';
import app from '../../../app';
import appContext from '../../../../context/app';
import routeContext from '../../../../context/route/auth/logout';
import { HttpException } from '../../../../models/exceptions/http';
import authenticate from '../../../../authentication/auth/logout';
import authorize from '../../../../authorization/auth/logout';
import { Result, Handler } from '../../../../handlers/auth/logout';
import PayloadValidator from '../../../middleware/validation';
import { LogoutPayload } from '../../../../models';

export default async (req: Request, res: Response): Promise<void> => {
  const appCtx: appContext = app.get('context');
  const routeCtx: routeContext = new routeContext();

  let reqPayload: any = Object.assign({}, req.params, req.body);
  const validationErr: string | void = await PayloadValidator(LogoutPayload, reqPayload);
  if (validationErr) {
    res.status(400).send(validationErr);
    return
  }
  let payload: LogoutPayload = Object.assign({}, new LogoutPayload, reqPayload);
  
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
