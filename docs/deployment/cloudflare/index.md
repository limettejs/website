---
title: Cloudflare Workers
---

# Cloudflare Workers

A Limette application handler accepts a Web `Request` and returns a Web
`Response`, so a Worker can call a Worker-compatible server bundle from `fetch`:

```js
import handler from "./dist/server/entry.js";

export default {
  fetch(request, env, ctx) {
    return handler(request, { env, ctx });
  },
};
```

The second argument becomes `ctx.platform` in Limette middleware and handlers.
For this Worker entry, its shape is `{ env, ctx }`, allowing access to bindings
and `ctx.waitUntil()` where the Worker runtime provides them.

The generated starter targets Node or Deno and does not include a Cloudflare
deployment configuration. A Worker deployment requires a Worker-target Vite
server build that bundles dependencies for that runtime and a Cloudflare
configuration for the emitted script and static client assets. The framework's
Worker build and request tests cover the handler integration, filesystem routes,
middleware, layouts, and platform value. They do not provide a turnkey Worker
project template.

Do not call `serve` from `limette/node` or `limette/deno` in a Worker; `fetch`
calls the built handler directly.
