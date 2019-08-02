import { IsString } from 'class-validator';

export class Todo {
  constructor(public todoID: string, public userID: string, public timestamp: Date, public note: string) {}
}

export class CreateTodoPayload {
  @IsString()
  public userID: string;

  @IsString()
  public note: string;
}

export class ShowTodoPayload {
  @IsString()
  public todoID: string;

  @IsString()
  public userID: string;
}

export class DeleteTodoPayload {
  @IsString()
  public todoID: string;

  @IsString()
  public userID: string;
}
