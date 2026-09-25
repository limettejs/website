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

Use pages for request-specific HTML and islands for interactive components.
An island is client rendered by default; `ssr: true` includes its initial
content in the server response before hydration. See [Islands](/docs/rendering/islands/)
for registration, rendering, and browser behavior.
