/**
 * DO NOT EDIT
 * AUTO-GENERATED FILE
 * This file was generated with 'design-first'
 */

import { Request, Response } from 'express';
import { RequestPayload, ValidatePayload, MalformedPayloadError, HttpReturn } from 'design-first';
import app from '../../../app';
import appContext from '../../../../context/app';
import requestContext from '../../../../context/request/auth/logout';
import authenticate from '../../../../authentication/auth/logout';
import authorize from '../../../../authorization/auth/logout';
import { Handler } from '../../../../handlers/auth/logout';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const appCtx: appContext = app.get('context');
    const requestCtx: requestContext = new requestContext();
    
    const authenticationErr: HttpReturn | void = await authenticate(appCtx, requestCtx, req, res);
    if (authenticationErr) {
      res.status(authenticationErr.status).send(authenticationErr.body);
      return
    }

    const authorizationErr: HttpReturn | void = await authorize(appCtx, requestCtx, req, res)
    if (authorizationErr) {
      res.status(authorizationErr.status).send(authorizationErr.body);
      return
    }

    const result: HttpReturn = await Handler(appCtx, requestCtx)
    res.status(result.status).send(result.body);
  } catch (e) {
    if (e instanceof MalformedPayloadError) {
      res.status(400).send(e.message);
      return
    }

    // TODO: add logging, here?
    res.status(500).send('internal server error');
    return
  }
}