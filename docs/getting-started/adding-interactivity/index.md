---
title: Adding interactivity
---

# Adding interactivity

Pages render HTML on the server. To make part of a page respond to clicks, add a
Lit component as an **island**. The generated project already includes a counter;
you can use the same pattern for your own component.

To try a smaller version, replace the generated `islands/counter.ts` with:

```ts
import { html, LitElement } from "lit";

export class Counter extends LitElement {
  static override properties = { count: { type: Number } };
  count = 0;

  override render() {
    return html`<button @click=${() => this.count++}>
      Count: ${this.count}
    </button>`;
  }
}
```

Then replace `routes/index.ts` to import the counter, register its tag, and
place that tag in the page:

```ts
import { PageComponent } from "limette";
import { html } from "lit";
import { Counter } from "../islands/counter.ts";

export default class Home extends PageComponent {
  static override islands = {
    "island-counter": { component: Counter, ssr: true },
  };

  override render() {
    return html`<h1>Home</h1>
      <island-counter></island-counter>`;
  }
}
```

Run `npm run dev` in the generated project and open the local URL shown by Vite.
The response already contains **Count: 0** because `ssr: true` renders the
counter on the server. When its browser code loads, Limette hydrates it; click
the button to increment the count. The rest of the page stays server rendered.

[Learn how Islands work](/docs/rendering/islands/).
