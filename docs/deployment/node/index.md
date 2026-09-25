---
title: Deploy on Node
---

# Deploy on Node

Choose **Node** when creating a project. The generated `main.js` imports the
built application handler and serves client assets through `limette/node`:

```js
// main.js
import { serve } from "limette/node";
import handler from "./dist/server/entry.js";

await serve(handler, {
  port: Number(process.env.PORT ?? 8000),
  staticFiles: { root: "./dist/client" },
});
```

Build before starting:

```sh
npm run build
npm run start
```

`serve` adapts Node HTTP requests to Web `Request` objects and writes the
returned `Response`. It accepts options such as `port`, `hostname`, `onListen`,
and `staticFiles`. Without a specified port it tries ports 8000 through 8019.
Static files are checked before the application handler when `staticFiles` is
configured.

The server bundle is `dist/server/entry.js`; client assets are in `dist/client`.
Deploy both outputs with the application dependencies and launcher.
