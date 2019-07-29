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

  try {
    task = await appCtx.db.createTask(payload.userID, payload.note);

    return new Result(200, task);
  } catch (e) {
    console.error('err creating new task', e);

    return new HttpException(500, 'internal server error');
  }
}
