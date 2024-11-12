---
category: Concepts
title: Static files
---

Limette automatically serves static files from the `/static` folder in the project root. The static files have a higher priority than routes. That means, even if a static file matches a route, the file will be served.

Every static file response gets the `content-type` header based on the file extension. Limette also adds an `etag` header.

```js
// routes/index.js
import { LitElement, html } from "lit";

export default class Home extends LitElement {
  render() {
    return html` <div>
      <img src="/logo.png" alt="My logo" />
    </div>`;
  }
}
```
