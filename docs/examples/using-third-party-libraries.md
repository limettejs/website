---
category: Examples
title: Using third-party libraries
---

With Limette, you can use third-party libraries. Most third-party libraries are UI libraries and that means you can use the components as **islands**.

> You can also use vanila or non-Lit Web Components , the only limitation is that they can't be Server-Side Rendered (SSR).

## Using Shoelace as islands

Add [Shoelace](https://shoelace.style/) to your project. In this example, we will use `/sl/islands/` as prefix, but you can use whatever you want as long as it contains the `/islands/` string. For example: `/foo/islands/bar/` or `/islands/foo/`.

```json
{
  "tasks": {
    "dev": "deno run -A --watch=static/,routes/ dev.ts",
    "build": "deno run -A dev.ts build",
    "start": "deno run -A --watch main.ts"
  },
  "imports": {
    ...
    "/sl/islands/": "npm:/@shoelace-style/shoelace/dist/components/"
  },
  "fmt": {
    "singleQuote": true
  },
  "lock": false
}
```

Now, in our route, we will import a self-registered component from Shoelace.

```js
// /routes/index.js
import { LitElement, html } from "lit";

import "/sl/islands/button/button.js";

export default class Home extends LitElement {
  override render() {
    return html`
        <div>
          <sl-button>Click me</sl-button>
        </div>
    `;
  }
}
```

### No self-registered entrypoints

If the library doesn't expose a self-registered entrypoint, you can create one in your `/islands/` folder.

```js
// /islands/button.js
import { SlButton } from "/sl/islands/button/button.component.js";

// or you can import it stright from npm
import { SlButton } from "npm:@shoelace-style/shoelace/dist/components/button/button.component.js";

customElements.define("sl-button", SlButton);
```

And then you import it in your route as usual.

```js
// /routes/index.js
import { LitElement, html } from "lit";

import "../islands/button.js";

export default class Home extends LitElement {
  override render() {
    return html`
        <div>
          <sl-button>Click me</sl-button>
        </div>
    `;
  }
}
```

## Using Shoelace as (SSR) components

There are cases where a Lit-based library can offer web components that don't require interactivity, so there is no need to bundle them to the browser.

For this cases, you can use them as regular componets that are Server-Side Rendered (SSR).

```js
// /routes/index.js
import { LitElement, html } from "lit";

import "npm:@shoelace-style/shoelace/dist/components/badge/badge.js";

export default class Home extends LitElement {
  override render() {
    return html`
        <div>
          <sl-badle>I'm a badge</sl-badge>
        </div>
    `;
  }
}
```

> In this example, the JavaScript code for the `<sl-badge>` won't be bundled to the browser.
