---
title: Cloudflare Workers
---

# Cloudflare Workers

A Limette application handler accepts a Web `Request` and returns a Web
`Response`, so Cloudflare Workers can call a compatible server bundle from
`fetch`:

```js
import handler from "./dist/server/entry.js";

export default {
  fetch(request, env, ctx) {
    return handler(request, { env, ctx });
  },
};
```

The second argument becomes `ctx.platform` in Limette middleware and handlers.
For this Cloudflare Workers entry, its shape is `{ env, ctx }`, allowing access
to bindings and `ctx.waitUntil()` where the runtime provides them.

The generated starter targets Node or Deno and does not include a Cloudflare
deployment configuration. A Cloudflare Workers deployment requires a Vite
server build targeting that runtime and bundling its dependencies, plus a
Cloudflare configuration for the emitted script and static client assets. The
framework's Cloudflare Workers build and request tests cover the handler
integration, filesystem routes, middleware, layouts, and platform value. They
do not provide a turnkey Cloudflare Workers project template.

Do not call `serve` from `limette/node` or `limette/deno` when deploying to
Cloudflare Workers; `fetch` calls the built handler directly.
