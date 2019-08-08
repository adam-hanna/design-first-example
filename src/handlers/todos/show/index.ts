import appContext from '../../../context/app';
import { HttpReturn } from '../../../internal/utils';
import requestContext from '../../../context/request/todos/show';
import {
  Todo,
  ShowTodoPayload,} from '../../../models';

export const Handler = async (appCtx: appContext, requestCtx: requestContext, payload: ShowTodoPayload): Promise<HttpReturn> => {
  let result: Todo;

  try {
    // your code, here...
    result = await appCtx.db.showTodo(payload.todoID, payload.userID);

    return new HttpReturn(200, result);
  } catch (e) {
    console.error('err in show action of todos service', e);

    return new HttpReturn(500, 'internal server error');
  }
}
