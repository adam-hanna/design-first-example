import appContext from '../../../context/app';
import routeContext from '../../../context/route/tasks/delete';
import {
  HttpException,
  DeleteTaskPayload, 
} from '../../../models';

export class Result {
  constructor(public status: number, public body: string) {}
}

export const Handler = async (appCtx: appContext, routeCtx: routeContext, payload: DeleteTaskPayload): Promise<Result | HttpException> => {
  try {
    await appCtx.store.deleteTask(payload.taskID, payload.userID);

    return new Result(200, 'ok');
  } catch (e) {
    console.error('err deleting task', e);

    return new HttpException(500, 'internal server error');
  }
}
