import { IsString } from 'class-validator';

export class Todo {
  constructor(public todoID: string, public userID: string, public timestamp: Date, public note: string) {}
}

type createTodoPayloadProps = {
  userID: string;
  note: string;
}

type showTodoPayloadProps = {
  todoID: string;
  userID: string;
}

type deleteTodoPayloadProps = {
  todoID: string;
  userID: string;
}

export class CreateTodoPayload {
  constructor({ userID, note }: createTodoPayloadProps) {
    this.userID = userID;
    this.note = note;
  }

  @IsString()
  public userID: string;

  @IsString()
  public note: string;
}

export class ShowTodoPayload {
  constructor({ todoID, userID }: showTodoPayloadProps) {
    this.todoID = todoID;
    this.userID = userID;
  }

  @IsString()
  public todoID: string;

  @IsString()
  public userID: string;
}

export class DeleteTodoPayload {
  constructor({ todoID, userID }: deleteTodoPayloadProps) {
    this.todoID = todoID;
    this.userID = userID;
  }

  @IsString()
  public todoID: string;

  @IsString()
  public userID: string;
}
