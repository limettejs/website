---
title: Route handlers
---

# Route handlers

A route may export a `handler` object alongside its page. Methods return
Web-standard `Response` objects. A GET handler can call `ctx.render()` to render
the page:

```ts
// routes/contact.ts
import { PageComponent, type RouteHandlers } from "limette";
import { html } from "lit";

export const handler: RouteHandlers = {
  async GET(ctx) {
    const response = await ctx.render();
    response.headers.set("x-page", "contact");
    return response;
  },
  POST() {
    return new Response("Message received", { status: 201 });
  },
};

export default class Contact extends PageComponent {
  override render() {
    return html`<h1>Contact</h1>`;
  }
}
```

For a response-only endpoint, omit the default page export:

```ts
// routes/api/health.ts
import type { RouteHandlers } from "limette";

export const handler: RouteHandlers = {
  GET() {
    return Response.json({ ok: true });
  },
};
```

`ctx.render()` is available when a route has a page component and is executing
its handler. To pass request-local data to a page, set typed `ctx.state` before
rendering; see [Data loading](/docs/concepts/data-fetching/).
