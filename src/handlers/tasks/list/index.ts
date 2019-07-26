import appContext from '../../../context/app';
import routeContext from '../../../context/route/tasks/list';
import {
  ListTasksPayload,
  Tasks,
  HttpException
} from '../../../models';

export class Result {
  constructor(public status: number, public body: Tasks) {}
}

export const Handler = async (appCtx: appContext, routeCtx: routeContext, payload: ListTasksPayload): Promise<Result | HttpException> => {
  let tasks: Tasks;

  try {
    tasks = await appCtx.store.listTasks(payload.userID);

    return new Result(200, tasks);
  } catch(e) {
    console.error('err listing tasks', e);

    return new HttpException(500, 'internal server error');
  }
}
