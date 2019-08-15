import { RequestPayload } from 'design-first';
import { IsString } from 'class-validator';

export class Todo {
  constructor(public todoID: string, public userID: string, public timestamp: Date, public note: string) {}
}

export class CreateTodoPayload {
  constructor(props: RequestPayload) {
    this.userID = props.params.userID;
    this.note = props.body.note;
  }

  @IsString()
  public userID: string;

  @IsString()
  public note: string;
}

export class ShowTodoPayload {
  constructor(props: RequestPayload) {
    this.todoID = props.params.todoID;
    this.userID = props.params.userID;
  }

  @IsString()
  public todoID: string;

  @IsString()
  public userID: string;
}

export class DeleteTodoPayload {
  constructor(props: RequestPayload) {
    this.todoID = props.params.todoID;
    this.userID = props.params.userID;
  }

  @IsString()
  public todoID: string;

  @IsString()
  public userID: string;
}
