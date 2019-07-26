import appContext from '../../../context/app';
import routeContext from '../../../context/route/tasks/show';
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

  try {
    task = await appCtx.store.showTask(payload.taskID, payload.userID);

    return new Result(200, task);
  } catch(e) {
    console.error('err showing task', e);

    return new HttpException(500, 'internal server error');
  }
}
