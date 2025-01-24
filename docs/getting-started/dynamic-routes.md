---
category: Getting started
title: Dynamic routes
---

Dynamic routes match a specific pattern in the URL. For example, `/greet/:name` will match routes like `/greet/John` or `/greet/Lucy`, but NOT `/greet/John/Lucy`.

## Example

Let's create a `/greet/[name].ts` page.

```js
// routes/greet/[name].ts
import { LitElement, html } from "lit";
import { ContextMixin } from "@limette/core";

export default class Greet extends ContextMixin(LitElement) {
  override render() {
    return html` <div>Greetings to you, ${this.ctx.params.name}!</div> `;
  }
}
```

Now, you can open the `http://localhost:8000/greet/John` and your page is ready.

The [Concepts: Routes](/docs/concepts/routing/) page has more details aboyt how you can build more advanced patterns.
