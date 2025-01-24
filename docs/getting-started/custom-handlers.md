---
category: Getting started
title: Custom handlers
---

Routes have two parts: the page component and the handlers. Until now, we only saw the page component in action, which is the default export of a route.

Handlers are functions in the form of `ctx => Response` or `ctx => Promise<Response>`.

## Example

Here is an example of a page that receives some custom data from the `GET` handler and sets a custom header. In the same time, for the same route, on a POST request, a different response is returned.

```js
// routes/contact.ts
import { LitElement, html } from "lit";
import { type Handlers, ContextMixin } from "@limette/core";

// Handlers
export const handler: Handlers = {
  async GET(ctx) {
    const resp = await ctx.render({ foo: "bar" });
    resp.headers.set("X-Custom-Header", "My custom header");
    return resp;
  },
  POST(_ctx) {
    return new Response(`Response for POST request!`);
  },
};

// Page component
export default class Contact extends ContextMixin(LitElement) {
  override render() {
    console.log(this.ctx.data);
    return html` <div>Contact ${this.ctx.data.foo}</div> `;
  }
}
```

In case you need to build an API, you don't need a page component, so you can omit it.

```js
// routes/api/products.ts
import { LitElement, html } from "lit";
import type { Handlers } from "@limette/core";

// Handlers
export const handler: Handlers = {
  GET(_ctx) {
    return new Response(`Response for GET request!`);
  },
  POST(_ctx) {
    return new Response(`Response for POST request!`);
  },
};
```
