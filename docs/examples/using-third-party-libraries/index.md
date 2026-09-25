---
title: Web Component libraries
---

# Web Component libraries

Limette's interactive boundary is a Web Component. A third-party component can
be used where its package and rendering model fit the target runtime, but the
recommended integration depends on how that library exports and registers its
custom elements.

For a Lit component class that you import directly, use the same static island
registration as the
[local counter example](/docs/getting-started/adding-interactivity/). A class
value creates a client-rendered island. Use
`{ component: ImportedClass, ssr: true }` only if the component and its
dependencies can render under Lit's server renderer. Browser-only libraries
should stay client rendered.

Packages that self-register their elements have a different entry shape. Follow
that package's registration instructions and verify it in both the Vite build
and target runtime; Limette's automatic island discovery uses imported classes
in a static `islands` object.
