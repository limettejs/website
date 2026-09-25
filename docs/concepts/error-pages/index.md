---
title: Error handling
---

# Error handling

Create `routes/_error.ts` to render an error page. A nested
`routes/admin/_error.ts` handles failures in that directory's URL scope; the
nearest matching boundary wins, with the root boundary as a fallback.

```ts
// routes/_error.ts
import { PageComponent } from "limette";
import { html } from "lit";

export default class ErrorPage extends PageComponent {
  override render() {
    const status = this.ctx.error?.status ?? 500;
    return html`
      <main>
        <h1>${status === 404 ? "Not found" : "Request failed"}</h1>
      </main>
    `;
  }
}
```

`HttpError` carries an HTTP status, message, and optional response headers.
Throw it from a handler or middleware when you want a specific status:

```ts
import { HttpError } from "limette";

throw new HttpError(404, "Product not found");
```

Unmatched paths use 404; unsupported methods on a matched path use 405 and
`Allow`. Unexpected exceptions become 500 errors. The boundary receives the
error through `this.ctx.error`, and its rendered response uses the error status.
Error pages render without inherited layouts. If an error page itself fails,
Limette returns a plain 500 response.

Without a matching custom error page, Limette returns a plain error response.
