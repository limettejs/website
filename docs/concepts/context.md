---
category: Concepts
title: Context
---

Limette offer access to a `Context` object where you get access to information about the current request.

## Server Context

On server, components get access to the full object that looks like this:

```js
export interface Context {
  request: Request;
  url: URL;
  info: Deno.ServeHandlerInfo;
  params: Record<string, string>;
  config: AppConfig;
  data?: unknown;
  error?: HttpError;
  next: () => Promise<Response>;
  render: (data?: Context["data"]) => Promise<Response>;
  redirect(path: string, status?: number): Response;
}
```

To use it, you need to apply the `ContextMixin` and the context will be available on `this.ctx` property.

```js
// routes/blog/[slug].ts
import { LitElement, html } from "lit";
import { ContextMixin } from "@limette/core";

export default class Contact extends ContextMixin(LitElement) {
  override render() {
    return html` <div>Post slug: ${this.ctx.params.slug}</div> `;
  }
}
```

## Client Context

Islands (client components) get access to a lighter `ClientContext` that looks like this:

```js
export interface ClientContext {
  url: URL;
  params: Record<string, string>;
}
```

To use it, you need to apply the `ContextMixin`, but imported from `@limette/core/runtime` and the context will be available on `this.ctx` property.

```js
// islands/counter.ts
import { LitElement, html } from "lit";
import { ContextMixin } from "@limette/core/runtime";

// URL: https://example.com/blog/my-post
export default class Counter extends ContextMixin(LitElement) {
  override render() {
    return html` <div>Post slug: ${this.ctx.params.slug}</div> `;
  }
}
```
