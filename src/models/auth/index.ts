import { IsString, Contains } from 'class-validator';

export class LoginPayload {
  @IsString()
  public username: string

  @IsString()
  public password: string
}

export class RegisterPayload {
  @IsString()
  public username: string;

  @IsString()
  public password: string;
}
