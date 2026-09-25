---
title: Development and production
---

# Development and production

Vite runs the development server and produces both client and server builds. The
generated scripts are `dev`, `build`, and `start`.

::: code-group

```sh [Node project]
npm run dev
npm run build
npm run start
```

```sh [Deno project]
deno task dev
deno task build
deno task start
```

:::

Run `build` before `start`: the launcher imports `./dist/server/entry.js`, which
the build creates. The adapter also serves static client assets from
`./dist/client`.

The generated app setup is small:

```ts
// app.ts
import { App } from "limette";

export const app = new App().fsRoutes();
```

```ts
// vite.config.ts
import { defineConfig } from "vite";
import { limette } from "limette/vite";

export default defineConfig({
  plugins: [limette({ app: "./app.ts" })],
});
```

For host-specific launchers, see [Node](/docs/deployment/node/) and
[Deno](/docs/deployment/deno/).
