---
title: Configuration
---

# Configuration

`AppConfig` has two public options:

| Option          | Default   | Effect                                          |
| --------------- | --------- | ----------------------------------------------- |
| `basePath`      | empty     | Prefixes registered string routes.              |
| `trailingSlash` | `'never'` | Canonical path policy: `'never'` or `'always'`. |

```ts
import { App } from "limette";

export const app = new App({
  basePath: "/portal",
  trailingSlash: "always",
}).fsRoutes();
```

With this configuration, a route registered as `/about` is under
`/portal/about/`; a request missing the trailing slash receives a 308 redirect.
The root path is not redirected just to add or remove a slash. `app.handler()`
handles the final request.

The public Vite plugin accepts `app` (required), `routesDir` (optional, default
`routes`), and `tailwind` (optional path to a Tailwind CSS entry):

```ts
import { defineConfig } from "vite";
import { limette } from "limette/vite";

export default defineConfig({
  plugins: [limette({ app: "./app.ts", routesDir: "routes" })],
});
```

Vite owns development and builds. Use Vite's own configuration for general Vite
settings. Runtime server options belong to the [Node](/docs/deployment/node/) or
[Deno](/docs/deployment/deno/) adapter.
