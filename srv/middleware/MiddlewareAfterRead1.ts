import type { Book } from '#cds-models/CatalogService';
import type { MiddlewareImpl, Next } from '@dxfrontier/cds-ts-dispatcher';
import type { TypedRequest } from '@sap/cds';

export class MiddlewareMethodAfterRead1 implements MiddlewareImpl {
  public async use(req: TypedRequest<Book>, next: Next) {
    console.log('Middleware 1: @AfterRead');

    void next();
  }
}
