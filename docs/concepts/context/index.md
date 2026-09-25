---
title: Context and state
---

# Context and state

A route handler or middleware receives a `Context`. A page, layout, or
application document reads a `RenderContext` through `this.ctx`. Both refer to
the same request, but only the handler context can continue the pipeline or
mutate request-local state.

| Field      | Meaning                                                                             |
| ---------- | ----------------------------------------------------------------------------------- |
| `request`  | Web-standard `Request`.                                                             |
| `url`      | Parsed request `URL`.                                                               |
| `params`   | Captured route parameters, as strings.                                              |
| `config`   | Resolved application configuration.                                                 |
| `platform` | Optional runtime value passed to `app.handler()`.                                   |
| `state`    | Data shared within this request. Mutable in `Context`, readonly in `RenderContext`. |
| `error`    | The current `HttpError` in an error boundary, otherwise `undefined`.                |

`Context` also has `next()`, `render()`, and `redirect(location, status?)`.
`next()` runs the next handler. `render()` renders the current page when a page
handler is executing. `redirect()` returns a redirect `Response`; its default
status is 302.

## Pass data to a page

```ts
// routes/products/[id].ts
import { PageComponent, type RouteHandlers } from "limette";
import { html } from "lit";

type State = { productName?: string };

export const handler: RouteHandlers<State> = {
  async GET(ctx) {
    ctx.state.productName = `Product ${ctx.params.id}`;
    return ctx.render();
  },
};

export default class Product extends PageComponent<State> {
  override render() {
    return html`<h1>${this.ctx.state.productName}</h1>`;
  }
}
```

State starts as a new object for each request. Render components see it as
readonly. Params are also request-local; optional or catch-all params absent
from a URL have the empty string value. Invalid percent encoding yields a 400
response.

## Platform values

`App<State, Platform>` lets you describe host-specific information while keeping
the request handler runtime-neutral:

```ts
import { App } from "limette";

type Platform = { requestId: string };
const app = new App<Record<string, unknown>, Platform>();
app.get("/request-id", (ctx) => new Response(ctx.platform.requestId));

const response = await app.handler()(
  new Request("https://example.com/request-id"),
  { requestId: "req-123" },
);
```

The Deno adapter supplies Deno's request information; a Worker can pass
`{ env, ctx }`. Only read platform fields after choosing and typing the host
value your application actually receives.
