import { RequestPayload } from 'design-first';
import { IsString } from 'class-validator';
import { Todo } from '../todo';

export class Todos extends Array<Todo> {}

export class ListTodosPayload {
  constructor(props: RequestPayload) {
    this.userID = props.params.userID;
  }

  @IsString()
  public userID: string;
}
