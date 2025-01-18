---
category: Concepts
title: Configs
---

Here are the configs available for a Limette app.

## Server configuration

You can configure the server with the same options as you would do it with `Deno.serve()`

```js
type ListenOptions = Partial<Deno.ServeTcpOptions & Deno.TlsCertifiedKeyPem> & {
  remoteAddress?: string,
};

export const app = new App();
app.listen(options: ListenOptions);
```

## Build

You can configure the JavaScript version using the `target` option.

```js
import { Builder, tailwind } from "@limette/core";
import { app } from "./main.ts";

const builder = new Builder({ target: ["chrome99", "firefox99", "safari15"] });
tailwind(app);
if (Deno.args.includes("build")) {
  await builder.build(app);
} else {
  await builder.listen(app);
}
```
