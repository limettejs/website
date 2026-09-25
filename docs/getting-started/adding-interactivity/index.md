---
title: Islands and hydration
---

# Islands and hydration

Pages and layouts generate HTML on the server. An island is a Lit component that
Limette also loads in the browser for interaction. Register imported island
classes in a static `islands` object on the page, layout, or application
component. The property names are custom-element tags.

```ts
// islands/counter.ts
import { html, LitElement } from "lit";

export class Counter extends LitElement {
  static override properties = { count: { type: Number } };
  count = 0;

  override render() {
    return html`<button @click=${() =>
      this.count++}>Count: ${this.count}</button>`;
  }
}
```

```ts
// routes/index.ts
import { PageComponent } from "limette";
import { html } from "lit";
import { Counter } from "../islands/counter.ts";

export default class Home extends PageComponent {
  static override islands = {
    "island-counter": { component: Counter, ssr: true },
  };

  override render() {
    return html`
      <h1>Home</h1>
      <island-counter></island-counter>
    `;
  }
}
```

With `ssr: true`, the counter's initial HTML is generated on the server and
hydrated in the browser. Without `ssr: true`, the island is client rendered: the
page contains its host element and the browser renders its contents after
loading the island code. A shorthand definition, `'island-counter': Counter`, is
also client rendered.

Limette discovers imported island classes from the static object and includes
browser registration code. You do not call `customElements.define()` for these
entries. Use an object literal with imported class identifiers; dynamically
computed entries are not part of the supported discovery shape.

Choose client rendering when the island has no useful initial server HTML or
depends on browser-only APIs. Choose SSR plus hydration when its first view
should be present in the HTML response. [Rendering modes](/docs/rendering/)
explains how this relates to pages.
