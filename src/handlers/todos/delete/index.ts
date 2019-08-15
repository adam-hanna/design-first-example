import appContext from '../../../context/app';
import { HttpReturn } from 'design-first';
import requestContext from '../../../context/request/todos/delete';
import {
  DeleteTodoPayload,
} from '../../../models';

export const Handler = async (appCtx: appContext, requestCtx: requestContext, payload: DeleteTodoPayload): Promise<HttpReturn> => {
  let result: string;

  try {
    // your code, here...
    await appCtx.db.deleteTodo(payload.todoID, payload.userID);

    return new HttpReturn(200, result);
  } catch (e) {
    console.error('err in delete action of todos service', e);

    return new HttpReturn(500, 'internal server error');
  }
}
