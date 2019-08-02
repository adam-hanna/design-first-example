export class User {
  constructor(public userID: string, public username: string, public isAdmin: boolean) {}
}

export class CreateUserPayload {
  constructor(public username: string, public password: string) {}
}
