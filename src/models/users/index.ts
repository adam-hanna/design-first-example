export class User {
  constructor(public userID: string, public userName: string) {}
}

export class CreateUserPayload {
  constructor(public userName: string, public password: string) {}
}
