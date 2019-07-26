import { IsString } from 'class-validator';
import { Task } from '../task';

export class Tasks extends Array<Task> {}

export class ListTasksPayload {
  @IsString()
  public userID: string;
}
