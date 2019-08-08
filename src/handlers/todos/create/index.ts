import appContext from '../../../context/app';
import { HttpReturn } from '../../../internal/utils';
import requestContext from '../../../context/request/todos/create';
import {
  Todo,
  CreateTodoPayload,} from '../../../models';

export const Handler = async (appCtx: appContext, requestCtx: requestContext, payload: CreateTodoPayload): Promise<HttpReturn> => {
  let result: Todo;

  try {
    // your code, here...
    result = await appCtx.db.createTodo(payload.userID, payload.note);

    return new HttpReturn(200, result);
  } catch (e) {
    console.error('err in create action of todos service', e);

    return new HttpReturn(500, 'internal server error');
  }
}
