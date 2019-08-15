import { RequestPayload } from 'design-first';
import { IsString, Contains } from 'class-validator';

export class LoginPayload {
  constructor(props: RequestPayload) {
    this.username = props.body.username;
    this.password = props.body.password;
  }

  @IsString()
  public username: string

  @IsString()
  public password: string
}

export class RegisterPayload {
  constructor(props: RequestPayload) {
    this.username = props.body.username;
    this.password = props.body.password;
  }

  @IsString()
  public username: string;

  @IsString()
  public password: string;
}
