import appContext from '../../../context/app';
import routeContext from '../../../context/route';
import {
  Task,
  Tasks,
  HttpException
} from '../../../models';

export class Result {
  constructor(public status: number, public body: Tasks) {}
}

export const Handler = async (appCtx: appContext, routeCtx: routeContext): Promise<Result | HttpException> => {
  let tasks: Tasks;

  const t1 = new Task('foo', new Date(), 'baz');
  const t2 = new Task('bar', new Date(), 'baz');

  tasks = new Tasks();
  tasks.push(t1);
  tasks.push(t2);

  return new Result(200, tasks);
}
