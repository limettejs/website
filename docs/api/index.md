---
title: API reference
---

# API reference

The package has four user-facing entry points:

| Import         | Main exports                                                                                                                | Guide                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `limette`      | `App`, `AppComponent`, `LayoutComponent`, `PageComponent`, `ServerComponent`, `HttpError`, cookie helpers, and public types | [Application](/docs/concepts/architecture/)       |
| `limette/vite` | `limette` Vite plugin and `LimetteOptions`                                                                                  | [Development](/docs/getting-started/development/) |
| `limette/node` | `serve` and server options                                                                                                  | [Node](/docs/deployment/node/)                    |
| `limette/deno` | `serve` and server options                                                                                                  | [Deno](/docs/deployment/deno/)                    |

## App

`new App<State, Platform>(config?)` creates an application. `use(middleware)`
adds global middleware, and `fsRoutes()` enables filesystem routes. `get`,
`post`, `put`, `patch`, `delete`, `head`, `options`, and `all` register
imperative routes. `error(path, middleware)` registers an error handler.
`handler()` returns the runtime-neutral
`(request, platform?) => Response | Promise<Response>` function.

`AppConfig` supports `basePath?: string` and
`trailingSlash?: 'never' | 'always'`. The default slash policy is `'never'`. See
[Configuration](/docs/concepts/configs/).

## Context and route modules

`Context<State, Platform>` exposes `request`, `url`, `params`, `config`,
`platform`, mutable `state`, `error`, `next()`, `render()`, and `redirect()`.
`RenderContext<State, Platform>` exposes the data fields with readonly state for
components. See [Context and state](/docs/concepts/context/).

A filesystem route may export a default page component, `handler` methods, and
`config` with `skipInheritedLayouts`. `_layout.ts` and `_middleware.ts` have
their own module conventions. See [Routing](/docs/concepts/routing/) and
[Middleware](/docs/concepts/middlewares/).

## Vite plugin

`limette({ app, routesDir?, tailwind? })` installs the Vite integration. `app`
points to the application module; `routesDir` chooses the route directory;
`tailwind` points to a Tailwind CSS entry. The plugin builds `dist/client` and
`dist/server/entry.js`.

## Runtime adapters

`serve(handler, options?)` in `limette/node` and `limette/deno` starts an HTTP
server. Both accept `staticFiles` to serve the Vite client output. Their
host-specific options differ; see the respective deployment pages.
