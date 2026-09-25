# Limette.dev

Documentation website for [Limette](https://limette.dev), built with VitePress
2.0.0-alpha.20.

## Develop

Use Node.js 22.12 or later. Install dependencies and start the development
server:

```sh
npm install
npm run dev
```

For production validation, formatting, and type checking:

```sh
npm run build
npm run preview
npm run check
npm run format:check
```

Run `npm run format` to format source files. The build writes to
`.vitepress/dist`.

## Deployment

`wrangler.jsonc` keeps the existing `limette-dev` Cloudflare deployment and
serves the static files from `.vitepress/dist`. The build command is
`npm run build`; `npm run deploy` builds and then invokes the locally installed
Wrangler CLI. The production domain is `https://limette.dev/`; no base path or
environment variables are configured in this repository.
