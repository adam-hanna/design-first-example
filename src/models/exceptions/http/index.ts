export class HttpException {
  constructor(public status: number, public body: string) {}
}
