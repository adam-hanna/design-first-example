import { IsString } from 'class-validator';

export class Task {
  constructor(public taskID: string, public userID: string, public timestamp: Date, public note: string) {}
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

  @IsString()
  public userID: string;
}

export class DeleteTaskPayload {
  @IsString()
  public taskID: string;

  @IsString()
  public userID: string;
}
