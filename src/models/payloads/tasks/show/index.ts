import { IsString, Contains } from 'class-validator';

export class ShowTaskPayload {
  @IsString()
  @Contains("hello")
  public id: string;
}
