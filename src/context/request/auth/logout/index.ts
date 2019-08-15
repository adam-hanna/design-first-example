import defaultRequestContext from '../../../request';

export default class extends defaultRequestContext {
  public destroySession(): void {}
}
