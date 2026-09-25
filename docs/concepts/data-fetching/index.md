---
title: Data loading
---

# Data loading

Load data in a route handler or middleware, put request-specific results in
`ctx.state`, and call `ctx.render()` to render a page. Render components read
the state through `this.ctx.state`.

```ts
// routes/products/[id].ts
import { HttpError, PageComponent, type RouteHandlers } from "limette";
import { html } from "lit";

type State = { product?: { id: string; name: string } };

async function loadProduct(id: string): Promise<State["product"]> {
  // Replace this sample with your application's data source.
  return { id, name: `Product ${id}` };
}

export const handler: RouteHandlers<State> = {
  async GET(ctx) {
    const product = await loadProduct(ctx.params.id);
    if (!product) throw new HttpError(404);
    ctx.state.product = product;
    return ctx.render();
  },
};

export default class Product extends PageComponent<State> {
  override render() {
    return html`<h1>${this.ctx.state.product?.name}</h1>`;
  }
}
```

`loadProduct` represents your own data-access function. Limette does not supply
a database or a `ctx.data` field. When a route only needs to return JSON, its
handler can return `Response.json(...)` without a page component.
