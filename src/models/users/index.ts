export class User {
  constructor(public userID: string, public userName: string, public isAdmin: boolean) {}
}

export class CreateUserPayload {
  constructor(public userName: string, public password: string) {}
}
