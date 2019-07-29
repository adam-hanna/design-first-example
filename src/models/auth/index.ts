import { IsString, Contains } from 'class-validator';

export class LoginPayload {
  @IsString()
  public userName: string

  @IsString()
  public password: string
}

export class RegisterPayload {
  @IsString()
  public userName: string;

  @IsString()
  public password: string;
}
