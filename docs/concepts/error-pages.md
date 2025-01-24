---
category: Concepts
title: Error pages
---

A middleware it will intercept a request in order for you to execute custom logic before the route handler. Often, a middleware is used for things like authentication or logging. A middleware is a `_middleware.ts|js` file.

Limette supports customizing the `404 Not Found`, and the `500 Internal Server Error` pages. These are shown when a request is made but no matching route exists, and when a middleware, route handler, or page component throws an error respectively.

An error page is represented by a `_error.ts|js` file. In case of multiple error pages, the one that match better (more specific) to the request is served.

```js
// routes/_error.ts
import { LitElement, html } from "lit";
import { ContextMixin } from "@limette/core";

export default class ErrorPage extends ContextMixin(LitElement) {
  override render() {
    if (this.ctx.error.status === 404) {
      return html`<div>Not found</div>`;
    }
    return html`<div>Server error</div> `;
  }
}
```

The error pages inherit layouts as any regular page.
