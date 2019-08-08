/**
 * DO NOT EDIT
 * AUTO-GENERATED FILE
 * This file was generated with 'design-first'
 */

import { Request, Response } from 'express';
import app from '../../../app';
import appContext from '../../../../context/app';
import requestContext from '../../../../context/request/todos/delete';
import { Validate, HttpReturn } from '../../../utils';
import authenticate from '../../../../authentication/todos/delete';
import authorize from '../../../../authorization/todos/delete';
import { Handler } from '../../../../handlers/todos/delete';
import { DeleteTodoPayload } from '../../../../models';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const appCtx: appContext = app.get('context');
    const requestCtx: requestContext = new requestContext();
    
    let payload: DeleteTodoPayload = new DeleteTodoPayload(Object.assign({}, req.body, req.query, req.params));
    const validationErr: string | void = await Validate(DeleteTodoPayload, payload);
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
    // TODO: add logging, here?
    res.status(500).send('internal server error');
    return
  }
}