---
title: Dynamic routes
---

# Dynamic routes

Put a parameter in brackets to capture part of a path. `routes/greet/[name].ts`
handles paths such as `/greet/Ada`:

```ts
import { PageComponent } from "limette";
import { html } from "lit";

export default class Greeting extends PageComponent {
  override render() {
    return html`<h1>Hello, ${this.ctx.params.name}</h1>`;
  }
}
```

`this.ctx.params` belongs to the current request. Its values are strings.
Optional and catch-all parameters use `[[name]]` and `[...path]`; an absent
value is the empty string. Limette decodes percent-encoded text, while a
malformed encoding produces a 400 response. An encoded slash remains encoded
within a parameter rather than becoming a new path segment.

See the [routing table](/docs/concepts/routing/#filesystem-routes) for more
patterns and precedence.
