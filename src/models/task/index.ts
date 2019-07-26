import { IsString, Contains } from 'class-validator';

export class Task {
  constructor(public taskID: string, public createdAt: Date, public note: string) {}
}

export class CreateTaskPayload {
  @IsString()
  public userID: string;

  @IsString()
  public note: string;
}

export class ShowTaskPayload {
  @IsString()
  public taskID: string;
}

export class DeleteTaskPayload {
  @IsString()
  public taskID: string;
}
