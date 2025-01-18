---
category: Concepts
title: Middlewares
---

A middleware it will intercept a request in order for you to execute custom logic before the route handler. Often, a middleware is used for things like authentication or logging. A middleware is a `_middleware.ts|js` file.

```js
// routes/_middleware.ts

export async function handler(ctx: Context): Promise<Response> {
  // do something
  return await ctx.next();
}
```

## Multiple middlewares

In case you need multiple middlewares, you can export the `handler` as an array. In this example, `middleware1` will be called first, then `midleware2`.

```js
// routes/_middleware.ts

export const handler = [
  async function middleware1(ctx: Context): Promise<Response> {
    // do something
    return await ctx.next();
  },
  async function middleware2(ctx: Context): Promise<Response> {
    // do something
    return await ctx.next();
  },
];
```
