/**
 * DO NOT EDIT
 * AUTO-GENERATED FILE
 * This file was generated with 'design-first'
 */

import { Request, Response } from 'express';
import app from '../../../app';
import appContext from '../../../../context/app';
import requestContext from '../../../../context/request/auth/register';
import { Validate, HttpReturn } from '../../../utils';
import authenticate from '../../../../authentication/auth/register';
import authorize from '../../../../authorization/auth/register';
import { Handler } from '../../../../handlers/auth/register';
import { RegisterPayload } from '../../../../models';

export default async (req: Request, res: Response): Promise<void> => {
  const appCtx: appContext = app.get('context');
  const requestCtx: requestContext = new requestContext();
  
  let reqPayload: any = Object.assign({}, req.params, req.body);
  const validationErr: string | void = await Validate(RegisterPayload, reqPayload);
  if (validationErr) {
    res.status(400).send(validationErr);
    return
  }
  let payload: RegisterPayload = Object.assign({}, new RegisterPayload, reqPayload);

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