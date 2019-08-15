/**
 * DO NOT EDIT
 * AUTO-GENERATED FILE
 * This file was generated with 'design-first'
 */

import { Request, Response } from 'express';
import { RequestPayload, ValidatePayload, MalformedPayloadError, HttpReturn } from 'design-first';
import app from '../../../app';
import appContext from '../../../../context/app';
import requestContext from '../../../../context/request/todos/create';
import authenticate from '../../../../authentication/todos/create';
import authorize from '../../../../authorization/todos/create';
import { Handler } from '../../../../handlers/todos/create';
import { CreateTodoPayload } from '../../../../models';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const appCtx: appContext = app.get('context');
    const requestCtx: requestContext = new requestContext();
    

    let payload: CreateTodoPayload = new CreateTodoPayload(new RequestPayload(req.body, req.query, req.params));

    const validationErr: string | void = await ValidatePayload(payload);
    if (validationErr) {
      res.status(400).send(validationErr);
      return
    }

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