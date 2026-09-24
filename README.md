# Limette.dev

Documentation website for [Limette](https://limette.dev), built with VitePress
2.0.0-alpha.20.

## Develop

Install dependencies with Deno, then use the documentation tasks:

```sh
deno install --frozen-lockfile
deno task docs:dev
deno task docs:build
deno task docs:preview
```

The tasks run the Deno-managed VitePress dependency with Node. The build writes
to `.vitepress/dist`. The existing `build` and `serve` task names remain as
aliases for deployment and local development.

## Deployment

`wrangler.jsonc` keeps the existing `limette-dev` Cloudflare deployment and
serves the static files from `.vitepress/dist`. The build command remains
`deno task build`; run it before the existing Wrangler deployment process. The
production domain is `https://limette.dev/`; no base path or environment
variables are configured in this repository.
