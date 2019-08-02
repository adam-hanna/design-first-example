/**
 * DO NOT EDIT
 * AUTO-GENERATED FILE
 * This file was generated with 'design-first'
 */

import { Request, Response } from 'express';
import app from '../../../app';
import appContext from '../../../../context/app';
import requestContext from '../../../../context/request/todos/show';
import { Validate, HttpReturn } from '../../../utils';
import authenticate from '../../../../authentication/todos/show';
import authorize from '../../../../authorization/todos/show';
import { Handler } from '../../../../handlers/todos/show';
import { ShowTodoPayload } from '../../../../models';

export default async (req: Request, res: Response): Promise<void> => {
  const appCtx: appContext = app.get('context');
  const requestCtx: requestContext = new requestContext();
  
  let reqPayload: any = Object.assign({}, req.params, req.body);
  const validationErr: string | void = await Validate(ShowTodoPayload, reqPayload);
  if (validationErr) {
    res.status(400).send(validationErr);
    return
  }
  let payload: ShowTodoPayload = Object.assign({}, new ShowTodoPayload, reqPayload);

  const authenticationErr: HttpReturn | void = await authenticate(appCtx, requestCtx, payload, req, res);
  if (authenticationErr) {
    res.status(authenticationErr.status).send(authenticationErr.body);
    return
  }

  const authorizationErr: HttpReturn | void = await authorize(appCtx, requestCtx, payload, req, res)
  if (authorizationErr) {
    res.status(authorizationErr.status).send(authorizationErr.body);
    return
  }

  const result: HttpReturn = await Handler(appCtx, requestCtx, payload)
  res.status(result.status).send(result.body);
}