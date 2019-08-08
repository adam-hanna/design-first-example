import { IsString } from 'class-validator';
import { Todo } from '../todo';

export class Todos extends Array<Todo> {}

type listTodosPayloadProps = {
  userID: string;
}

export class ListTodosPayload {
  constructor({ userID }: listTodosPayloadProps) {
    this.userID = userID;
  }

  @IsString()
  public userID: string;
}
