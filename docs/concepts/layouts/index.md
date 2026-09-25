---
title: Pages and layouts
---

# Pages and layouts

A route's default export extends `PageComponent`. A `_layout.ts` file wraps
routes in its directory and descendants. Both render through Lit; `render()`
takes no arguments, and the layout inserts `this.outlet`.

```ts
// routes/dashboard/_layout.ts
import { LayoutComponent } from "limette";
import { html } from "lit";

export default class DashboardLayout extends LayoutComponent {
  override render() {
    return html`<div class="dashboard"><nav>Dashboard</nav>${this.outlet}</div>`;
  }
}
```

```ts
// routes/dashboard/index.ts
import { PageComponent } from "limette";
import { html } from "lit";

export default class Dashboard extends PageComponent {
  override render() {
    return html`
      <main>
        <h1>Dashboard</h1>
      </main>
    `;
  }
}
```

Layouts nest from the route root toward the page. A layout can opt out of parent
layouts with `export const config = { skipInheritedLayouts: true }`; a page can
use the same setting to skip its inherited layouts entirely. These are
filesystem module settings, distinct from `AppConfig`.

App, layout, and page components can provide a `head()` contribution. Their
server-rendered structures use light DOM. Interactive islands are ordinary Lit
components and may use their own shadow DOM.
