import appContext from '../../../context/app';
import routeContext from '../../../context/route/tasks/create';
import {
  Task,
  HttpException,
  CreateTaskPayload,
} from '../../../models';

export class Result {
  constructor(public status: number, public body: Task) {}
}

export const Handler = async (appCtx: appContext, routeCtx: routeContext, payload: CreateTaskPayload): Promise<Result | HttpException> => {
  let task: Task;

  return new Result(200, task);
}
