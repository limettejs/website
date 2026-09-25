---
title: Middleware
---

# Middleware

Middleware receives a mutable `Context` and returns a `Response`. Call
`ctx.next()` to continue, or return a response to stop the chain.

## Application middleware

```ts
import { App } from "limette";

export const app = new App().fsRoutes();
app.use(async (ctx) => {
  const response = await ctx.next();
  response.headers.set("x-app", "limette");
  return response;
});
```

`app.use()` runs for every request, including requests that will become 404 or
405 responses. Global middleware runs in registration order before a matched
route. A matching `app.all(path, handler)` registered before the route can wrap
it. Imperative routes may pass multiple handlers to a method such as
`app.get(path, first, second)`.

## Filesystem middleware

Export `handler` from `_middleware.ts` in `routes/` or a nested route directory:

```ts
// routes/admin/_middleware.ts
import type { Middleware } from "limette";

export const handler: Middleware = async (ctx) => {
  if (!ctx.request.headers.has("authorization")) {
    return new Response("Unauthorized", { status: 401 });
  }
  return ctx.next();
};
```

A filesystem route receives middleware from the route root down to its
directory. `handler` may be one function or an array of functions; array members
run in order. The request chain runs global middleware, previously registered
matching `all` handlers, inherited filesystem middleware, then the route
handler. Code after `await ctx.next()` runs on the way back out.

Use `ctx.state` for data shared within one request. See
[Context and state](/docs/concepts/context/).
