import { IsString } from 'class-validator';
import { Todo } from '../todo';

export class Todos extends Array<Todo> {}

export class ListTodosPayload {
  @IsString()
  public userID: string;
}
