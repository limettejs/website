---
title: Rendering modes
---

# Rendering modes

Limette separates the HTML response from browser interaction.

| Mode                   | Server response                                           | Browser behavior                                              |
| ---------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| Page and layout SSR    | Lit renders the page and layouts to HTML for the request. | The structural page does not need a page-wide hydration step. |
| Client-rendered island | HTML contains the island's host element.                  | Its Lit component renders when its browser code loads.        |
| Server-rendered island | HTML contains the island's initial content.               | Its Lit component hydrates, then handles interaction.         |

A filesystem page is server rendered when its route returns `ctx.render()`
(including the default GET behavior). The `ssr: true` setting applies to an
**island definition**, not to the page as a whole.

In a component's static `islands` object, an imported class value selects client
rendering. A descriptor such as `{ component: ImportedClass, ssr: true }`
selects server rendering and hydration.

The classes above must be imported into the module that declares this static
object. The server response may include the island's required browser scripts
and styles. Vite builds a client output and a `dist/server/entry.js` handler;
the Node or Deno adapter serves client assets and invokes that handler for
application requests.

Use pages for request-specific HTML, client-rendered islands for browser-only
interfaces, and SSR islands when initial island content belongs in the HTML
response. See
[Islands and hydration](/docs/getting-started/adding-interactivity/) for a
complete counter example.
