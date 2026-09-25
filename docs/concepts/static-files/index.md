---
title: CSS and static files
---

# CSS and static files

The starter includes `public/` for files served without module processing. Vite
copies them to `dist/client` during build. The generated Node and Deno launchers
serve that directory before sending requests to the Limette handler.

Put `public/logo.svg` in the project and refer to it as `/logo.svg` in a page:

```ts
import { PageComponent } from "limette";
import { html } from "lit";

export default class Home extends PageComponent {
  override render() {
    return html`<img src="/logo.svg" alt="Site logo" />`;
  }
}
```

For CSS that belongs to application code, import a stylesheet from the
application document, a layout, or a route. Vite emits the required assets and
Limette adds the route's stylesheet links through `this.assets.styles` in
`_app.ts`. Island styles can be imported from island modules. Lit's
`static styles` remains useful for an island's shadow DOM.

See [Tailwind CSS](/docs/concepts/tailwind/) for the optional utility styling
setup.
