---
title: Islands
---

# Islands

An island is a Lit component that Limette loads in the browser for interaction.
Pages and layouts produce the HTML response; they do not hydrate as a whole.
Use an island for a part of that HTML that needs browser state or event handlers,
such as the counter in [Adding interactivity](/docs/getting-started/adding-interactivity/).

## Declare an island

The counter is an ordinary Lit component with reactive state and a click
handler:

```ts
// islands/counter.ts
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

Import the class into the page and give it a custom-element tag in a static
`islands` object:

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
    return html`<h1>Home</h1>
      <island-counter></island-counter>`;
  }
}
```

The tag in the template must match its `islands` key. Limette discovers the
imported class and registers it in the browser; do not call
`customElements.define()` for it. You can declare islands on an application,
layout, or page component, and render multiple instances or different island
tags in a page.

## Rendering and hydration

**SSR** produces HTML on the server. **An island** marks an interactive
component boundary. **Hydration** activates an island that was server rendered
when its browser code loads. These are separate choices:

| Island definition                                     | Initial response                            | In the browser                                          |
| ----------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------- |
| `"island-counter": Counter`                           | The host tag, without the counter's content | The component renders and handles clicks.               |
| `"island-counter": { component: Counter, ssr: true }` | The host tag and initial counter content    | The component hydrates that content and handles clicks. |

`ssr` defaults to `false`; `{ component: Counter, ssr: false }` has the same
rendering behavior as the shorthand. With `ssr: true` in the example, the HTML
response contains **Count: 0** before browser JavaScript runs. Hydration keeps
that rendered content and attaches the button handler, so a click updates the
component's `count` state. Without server rendering, the browser renders the
counter after loading its code. Choose that mode when the first view needs
browser APIs or has no useful server HTML.

The page and layout remain server rendered in either case. Limette includes the
browser code needed for the islands used by the route; the structural page does
not become a browser component. See [Rendering modes](/docs/rendering/) for the
page-level view.

## Values and styles

Pass initial values through the island's host attributes, using Lit reactive
properties where appropriate. For example, the generated starter passes
`name="Iris"` to its counter. The server renderer uses those values for an SSR
island, and the hydrated component continues from its initial view. Changes to
the component's reactive state then update it in the browser; page and layout
state does not automatically become browser state.

Islands keep a shadow root, so their component styles are encapsulated. Limette
also includes island styles with routes that use them, including imported CSS
and Lit `styles`; route-specific styles do not leak into other routes.

## Discovery constraints

The `islands` value must be a static object literal with imported component
classes. Each entry is an imported class or a descriptor with `component` and
an optional literal `ssr: true` or `ssr: false`. Computed keys, spreads,
dynamic values, and other descriptor options cannot be discovered. If an island
uses browser-only APIs while rendering, leave it client rendered so the server
does not execute that render path.

Want a minimal example to try first? See
[Adding interactivity](/docs/getting-started/adding-interactivity/).
