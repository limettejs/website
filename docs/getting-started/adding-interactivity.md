---
category: Getting started
title: Adding interactivity
---

Until now, we talked about routes, which represent the static content.

When you need to add interactivity to your page, you can use **islands**.

Islands, just like page components, are just web components. The difference is that they are bundled and delivered to the client. They are Client-Side Rendered (CSR) by default, but they can be Server-Side Rendered (SSR) by using the `ssr`attribute.

Islands can use any lifecycle callbacks.

## Example

```js
// islands/counter.ts
import { LitElement, html, css } from "lit";

export class Counter extends LitElement {
  declare count: number;

  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 0;
  }

  override updated(changedProperties) {
    if (changedProperties.has("count")) {
      console.log("Counter changed", this.count);
    }
  }

  override render() {
    return html`
      <button type="button" @click=${() => this.count--}>-</button>
      <span>Count: ${this.count}</span>
      <button type="button" @click=${() => this.count++}>+</button>
    `;
  }
}

customElements.define("island-counter", Counter);
```

Now, in your route you can consume the island like this:

```js
// routes/index.ts
import { LitElement, html } from "lit";
import "../islands/counter.ts";

export default class Home extends LitElement {
  override render() {
    return html` <div>
      <island-counter></island-counter>
      <island-counter ssr></island-counter>
    </div>`;
  }
}
```

Now, open `http://localhost:8000` and check how the counter is interactive.
