---
category: Examples
title: Modifying the &lt;head&gt;
---

To modify the the `<head>` content, you can use the app wrapper `/routes/_app.ts`.

By default, it looks someting like this:

```js
import { LitElement, html } from "lit";
import type { AppTemplateOptions } from "@limette/core";

export default class App extends LitElement {
  render(app: AppTemplateOptions) {
    return html` <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Limette</title>
        ${app.css}
      </head>
      <body>
        ${app.component} ${app.js}
      </body>
    </html>`;
  }
}
```

You can add whatever you need in the `<head>` section.

For now, the app wrapper is shared between all the routes.
