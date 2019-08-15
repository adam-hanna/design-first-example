import appContext from '../../../context/app';
import { HttpReturn } from 'design-first';
import requestContext from '../../../context/request/todos/list';
import {
  Todos,
  ListTodosPayload,
} from '../../../models';

export const Handler = async (appCtx: appContext, requestCtx: requestContext, payload: ListTodosPayload): Promise<HttpReturn> => {
  let result: Todos;

  try {
    // your code, here...
    result = await appCtx.db.listTodos(payload.userID);

    return new HttpReturn(200, result);
  } catch (e) {
    console.error('err in list action of todos service', e);

    return new HttpReturn(500, 'internal server error');
  }
}
