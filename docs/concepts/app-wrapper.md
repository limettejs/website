---
category: Concepts
title: App wrapper
---

App wrapper is the component that holds the main structure of the `<html>` page. An app wrapper is a `_app.ts|js` file.

```js
// routes/_app.ts
import { LitElement, html } from "lit";
import type { AppWrapperOptions } from "@limette/core";

export default class App extends LitElement {
  render(app: AppWrapperOptions) {
    return html` <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="foo" key="description" />
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
