import { IsString, Contains } from 'class-validator';

type authPayloadProps = {
  username: string;
  password: string;
}

export class LoginPayload {
  constructor({ username, password}: authPayloadProps) {
    this.username = username;
    this.password = password;
  }

  @IsString()
  public username: string

  @IsString()
  public password: string
}

export class RegisterPayload {
  constructor({ username, password}: authPayloadProps) {
    this.username = username;
    this.password = password;
  }

  @IsString()
  public username: string;

  @IsString()
  public password: string;
}
