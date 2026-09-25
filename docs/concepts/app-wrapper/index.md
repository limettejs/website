---
title: Application document
---

# Application document

`routes/_app.ts` defines the HTML document for filesystem pages. It extends
`AppComponent`, puts `this.outlet` where the page belongs, and inserts the
styles and scripts supplied by the build. The initializer creates this shape:

```ts
// routes/_app.ts
import { AppComponent } from "limette";
import { html } from "lit";

export default class Document extends AppComponent {
  override head() {
    return html`<title>My app</title>`;
  }

  override render() {
    return html`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          ${this.assets.styles}
        </head>
        <body>
          ${this.outlet} ${this.assets.scripts}
        </body>
      </html>
    `;
  }
}
```

`render()` has no arguments. `AppComponent`, `LayoutComponent`, and
`PageComponent` use light DOM for their server-rendered structure. The
application document can also read `this.ctx` and `this.route` while rendering.
Use `head()` for metadata contributed to the document head; see
[Head and metadata](/docs/examples/modifying-the-head/).
