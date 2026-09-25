---
title: Application architecture
---

# Application architecture

Limette's core handles Web-standard requests:

```text
Request → App.handler() → middleware → route → Response
```

`App` owns configuration, middleware, and routes. `app.handler()` returns a
runtime-neutral function that accepts a `Request` and an optional platform
value, then returns a `Response` or a promise of one.

```ts
import { App } from "limette";

const app = new App();
app.get("/health", () => new Response("ok"));

const response = await app.handler()(new Request("https://example.com/health"));
```

`limette/node` and `limette/deno` adapt this handler to HTTP servers. A Worker
can call it from `fetch(request, env, ctx)` with runtime data as the platform
value. Neither route code nor middleware needs a Node or Deno request object.

For filesystem pages, call `new App().fsRoutes()` and use the
[Vite plugin](/docs/getting-started/development/) to discover `routes/`.
Imperative routes can coexist with filesystem routes. The app uses the same
handler interface after Vite builds its server entry.

Pages and layouts are rendered on the server. Browser behavior belongs in
[islands](/docs/getting-started/adding-interactivity/), which may be client-only
or server rendered and hydrated.
