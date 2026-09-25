---
title: Create a project
---

# Create a project

Run the initializer from npm or Deno:

::: code-group

```sh [Node]
npm create limette@latest
```

```sh [Deno]
deno run -A npm:create-limette@latest
```

:::

Enter a project name, then choose a runtime (**Deno** or **Node**) and whether
to include **Tailwind CSS**. The initializer defaults to Deno and Tailwind if
you accept the prompts. It installs dependencies with the selected runtime's
package manager.

The creation command itself runs through Node/npm. A generated Deno application
uses Deno for development and serving; a Node application uses Node/npm.

::: code-group

```sh [Node project]
cd my-app
npm run dev
```

```sh [Deno project]
cd my-app
deno task dev
```

:::

The development server is provided by Vite. Open the local URL it prints. The
starter includes a home page, a second page, and an interactive counter island.

See [Project structure](/docs/getting-started/project-structure/) for the files
the initializer creates.
