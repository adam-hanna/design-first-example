import express from 'express';
import appContext from '../../../context/app';
import routeContext from '../../../context/route/tasks/create';
import { HttpException } from '../../../models/exceptions/http';
import { CreateTaskPayload } from '../../../models';

export default async (
  appCtx: appContext,
  routeCtx: routeContext,
  payload: CreateTaskPayload,
  req: express.Request,
  res: express.Response,
): Promise<HttpException | void> => {}
