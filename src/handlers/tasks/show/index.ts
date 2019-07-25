import appContext from '../../../context/app';
import routeContext from '../../../context/route';
import {
  Task,
  HttpException,
  ShowTaskPayload,
} from '../../../models';

export class Result {
  constructor(public status: number, public body: Task) {}
}

export const Handler = async (appCtx: appContext, routeCtx: routeContext, payload: ShowTaskPayload): Promise<Result | HttpException> => {
  let task: Task;

  task = new Task('foo', new Date(), 'baz');

  return new Result(200, task);
}
