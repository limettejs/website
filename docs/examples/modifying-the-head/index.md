---
title: Head and metadata
---

# Head and metadata

`AppComponent`, `LayoutComponent`, and `PageComponent` can return Lit templates
from `head()`. Limette combines their contributions into the document's
`<head>`. Put document-wide defaults in `routes/_app.ts`, and page-specific
values on the page.

```ts
// routes/products/[id].ts
import { PageComponent } from "limette";
import { html } from "lit";

export default class Product extends PageComponent {
  override head() {
    return html`
      <title>Product ${this.ctx.params.id}</title>
      <meta name="description" content="Product details" />
      <link rel="canonical" href=${this.ctx.url.href} />
    `;
  }

  override render() {
    return html`<h1>Product ${this.ctx.params.id}</h1>`;
  }
}
```

A page can also contribute Open Graph or other standard meta tags through
`head()`. Limette merges common tags such as titles, named meta tags, and
canonical links so page-specific entries can replace application defaults. The
`key` attribute can identify an entry explicitly when needed; it is removed from
the final HTML.

Keep the document's charset, viewport, `${this.assets.styles}`, and
`${this.assets.scripts}` in `_app.ts` as shown in the
[application document](/docs/concepts/app-wrapper/).
