---
category: Concepts
title: Tailwind
---

Limette has a built in plugin for [Tailwind](https://tailwindcss.com/).

Limette generates a css file including Tailwind styles for every route. In order to do it, for every route it scans the page component with all the islands and _components_ imported, the [app wrapper](/docs/concepts/app-wrapper/) and the applied [layouts](/docs/concepts/layouts/) with their imported _components_.

> By _components_, we mean all the imports containing "/components/" in the path.

## Enable Tailwind

When you create a new project, the plugin is enabled by default. But in case you remove it and you want to enable it later, you can do it from your `./dev.ts` file.

```js
import { tailwind } from "@limette/core"; // <-- add this line
import { Builder } from "@limette/core/dev";
import { app } from "./main.ts";

const builder = new Builder();
tailwind(app); // <-- add this line
if (Deno.args.includes("build")) {
  await builder.build(app);
} else {
  await builder.listen(app);
}
```

## Disable Tailwind

You can disable Tailwind be removing it from your `./dev.ts` file.

```js
import { tailwind } from "@limette/core"; // <-- remove this line
import { Builder } from "@limette/core/dev";
import { app } from "./main.ts";

const builder = new Builder();
tailwind(app); // <-- remove this line
if (Deno.args.includes("build")) {
  await builder.build(app);
} else {
  await builder.listen(app);
}
```
