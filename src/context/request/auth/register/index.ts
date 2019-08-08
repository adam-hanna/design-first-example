import defaultRequestContext from '../../../request';

export default class extends defaultRequestContext {
  public setSession(userID: string, isAdmin: boolean): void {}
}
