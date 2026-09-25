---
title: Introduction
---

# Limette

Limette builds applications with Lit Web Components, Vite, and Web-standard
`Request` and `Response` objects. A route can return a response directly or
render a page on the server. Interactive components can run in the browser as
islands, with optional server rendering and hydration.

The application handler is independent of its host runtime. The same core
application can be served through the Node or Deno adapter, or called from a
compatible Worker `fetch` handler.

## Why use it?

- Write pages and layouts as Lit components, with HTML generated for each
  request.
- Keep browser JavaScript focused on the islands that need interaction.
- Use filesystem routes for pages and imperative routes for explicit handlers.
- Let Vite handle development and builds, with optional Tailwind CSS v4 support.

Start with [Create a project](/docs/getting-started/create-a-project/) or read
the [application model](/docs/concepts/architecture/).
