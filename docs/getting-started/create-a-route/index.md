---
title: Create a route
---

# Create a route

Add a TypeScript or JavaScript file under `routes/`. Its default export is a
page component. For example, `routes/contact.ts` handles `GET /contact`:

```ts
import { PageComponent } from "limette";
import { html } from "lit";

export default class Contact extends PageComponent {
  override render() {
    return html`
      <main>
        <h1>Contact</h1>
      </main>
    `;
  }
}
```

The page is rendered into the document defined by `routes/_app.ts`. `render()`
takes no arguments; a page can read its request's render context through
`this.ctx`. A default page export provides a GET handler automatically, unless
you define your own `handler.GET`.

See [Routing](/docs/concepts/routing/) for file names and matching, and
[Pages and layouts](/docs/concepts/layouts/) for composition.
