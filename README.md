# `astro-lenis`

This is an [Astro integration](https://docs.astro.build/en/guides/integrations-guide/) that adds simple and performant smooth-scrolling with [Lenis](https://lenis.darkroom.engineering/).

## Usage

### Installation

Install the integration **automatically** using the Astro CLI:

```bash
npx astro add astro-lenis
```

```bash
pnpm astro add astro-lenis
```

```bash
yarn astro add astro-lenis
```

Or install it **manually**:

1. Install the required dependencies

```bash
npm install astro-lenis
```

```bash
pnpm add astro-lenis
```

```bash
yarn add astro-lenis
```

2. Add the integration to your `astro.config.mjs`

```diff
+import astroLenis from "astro-lenis";

export default defineConfig({
  integrations: [
+    astroLenis(),
  ],
});
```

### Configuration

This package is meant to be a simple drop-in smooth-scroll solution and does not include all of Lenis' configuration options. If you need a more complex solution visit [Lenis](https://lenis.darkroom.engineering/) to set it up in your project without the integration.

```js
// astro.config.mjs

import { defineConfig } from 'astro/config';
import astroLenis from 'astro-lenis';

export default defineConfig({
  integrations: [astroLenis({
    duration: number, /* Optional. Duration of the scroll animation in seconds */
    syncTouch: boolean, /* Optional. Controls whether to use lenis on devices 
                           with native smooth scroll like smartphones. 
                           Defaulted to false since native smooth scrolling 
                           is more performant */
})],
});
```

## Licensing

[MIT Licensed](https://github.com/TODO:/blob/main/LICENSE). Made with ❤️ by [Matthew Justice](https://github.com/JusticeMatthew).

## Acknowledgements

@Bryceguy for helping me out so much with this in the discord
@Florian for making the template
@Houston because you're cute
